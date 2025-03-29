"use client"

import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaChevronDown } from "react-icons/fa";
import CustomButton from "@/components/CustomButton";
import Link from 'next/link';

export default function AdminCollections({initialCollections}) {

    useEffect(() => {
            const jwt = localStorage.getItem("jwt");
            const user = localStorage.getItem("user");
    
            if (!jwt && !user) {
              window.location.href = "/auth"; // Redirect to login if no token
            }
      }, []);
      
    const [collections, setCollections] = useState(initialCollections);
    const [selectedCollections, setselectedCollections] = useState([]);
    const [sortOpen, setSortOpen] = useState(false);
  
    const toggleSelection = (id) => {
      setselectedCollections((prev) =>
        prev.includes(id) ? prev.filter((collectionId) => collectionId !== id) : [...prev, id]
      );
    };
    
    const handleSort = (criteria) => {
        console.log("Sorting by:", criteria);
        // Your sorting logic here
    };      
    
    return (
        <div className="max-w-5xl mx-auto my-24 p-6">
          {/* Action Buttons */}
          <div className="flex justify-between items-center space-x-4 mb-4">
              <div className="flex space-x-4">
                  <CustomButton 
              			text="Approve collections"
              			bgColor = "bg-green-100"
              			textColor = "text-green-700"
              			onClick={() => alert("Importing!")}
              			width = ""
              			height = "h-10"
              			className="text-sm border border-green-500 hover:bg-green-200"
              		/>
            		
              		<CustomButton 
              			text="Reject collections"
              			bgColor = "bg-red-100 "
              			textColor = "text-red-700 "
              			onClick={() => alert("Importing!")}
              			width = ""
              			height = "h-10"
              			className="text-sm border border-red-500 hover:bg-red-200"
                	/>
              </div>
              
              {/* Right Side - Sort Button with Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center px-4 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setSortOpen(!sortOpen)}
                >
                  Sort By 
                  <FaChevronDown className={`ml-2 transform transition ${sortOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
            
                {sortOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <button onClick={() => handleSort('title')} className="w-full text-left px-4 py-2 hover:bg-gray-100">Title (A-Z)</button>
                    <button onClick={() => handleSort('publication_date')} className="w-full text-left px-4 py-2 hover:bg-gray-100">Publication Date</button>
                    <button onClick={() => handleSort('submission_date')} className="w-full text-left px-4 py-2 hover:bg-gray-100">Submission Date</button>
                    <button onClick={() => handleSort('status')} className="w-full text-left px-4 py-2 hover:bg-gray-100">Status</button>
                  </div>
                )}
              </div>
            </div>
    
          {/* Table */}
          <div className="w-full mt-8 bg-white rounded-lg overflow-hidden">
            <table className="w-full border-collapse border-separate border-spacing-y-8">
              {/* Table Header */}
              <thead>
                <tr className="bg-gray-100 text-left text-sm text-gray-600">
                  <th className="p-3">Title</th>
                  <th className="p-3">Submitted By</th>
                  <th className="p-3">Submission Date</th>
                  <th className="p-3">Publication Date</th>
                  <th className="p-3">Content</th>
                  <th className="p-3">Abstract</th>
                  <th className="p-3">Status</th>
                  {/* <th className="p-3">Actions</th> */}
                </tr>
              </thead>
    
              {/* Table Body */}
              <tbody className="space-y-4">
               {collections.results && collections.count > 0 ? (
                  collections.results.map((collection) => (
                    <tr
                      key={collection.id}
                      className={`border-b space-y-2 shadow-md shadow-gray-100 ${
                        selectedCollections.includes(collection.id) ? "bg-red-100" : "bg-white"
                      }`}
                    >
                      {/* User Info */}
                      <td className="p-3">{collection.title}</td>
                      <td className="p-3">
                        {collection.authors.length > 0 ? (
                          collection.authors.map((author) => (
                            <a key={author.id} href={`mailto:${author.email}`} className="hover:text-blue-600 block">
                              {author.name}
                            </a>
                          ))
                        ) : (
                          <span className="">No author</span>
                        )}
                      </td>
                      <td className="p-3">{collection.date_of_publication.slice(0, 10)}</td>
                      <td className="p-3">{collection.date_of_publication.slice(0, 10)}</td>
                      <td className="p-3">
                        <Link
                          href={`/admin_collections/${collection.id}`}
                          className="text-ashesi-red font-light cursor-pointer"
                        >
                          view
                        </Link>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => alert(collection.abstract || "No Abstract Available")}
                          className="text-ashesi-red font-light cursor-pointer"
                        >
                          abstract
                        </button>
                      </td>

                      <td className="p-3 flex items-center justify-center space-x-2 relative group">
                        {collection.approval_status === "approved" ? (
                          <span className="w-4 h-4 rounded-full bg-green-500 group-hover:bg-green-600"></span>
                        ) : collection.approval_status === "disapproved" ? (
                          <span className="w-3 h-3 rounded-full bg-red-500 group-hover:bg-red-600"></span>
                        ) : (
                          <span className="w-3 h-3 rounded-full bg-gray-400 group-hover:bg-gray-500"></span>
                        )}
                    
                        {/* Tooltip that shows on hover */}
                        <span className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition">
                          {collection.approval_status || "Pending"}
                        </span>
                      </td>
                
                      {/* Checkbox + Action Buttons */}
                      <td className="p-3 flex items-center space-x-2">
                        <FaCheckCircle className="text-green-500 cursor-pointer" />
                        <FaTimesCircle className="text-red-500 cursor-pointer" />
                        <input
                          type="checkbox"
                          checked={selectedCollections.includes(collection.id)}
                          onChange={() => toggleSelection(collection.id)}
                          className="cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-3 text-center text-gray-500">
                      No collections available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
    )
}