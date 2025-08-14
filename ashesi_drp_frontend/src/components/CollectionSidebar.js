"use client";

// import "../../globals.css";
import CustomButton from "@/components/CustomButton";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaTimes, FaCheck, FaClock, FaQuoteRight, FaClipboard } from 'react-icons/fa';
import {FiDownload, FiEye} from 'react-icons/fi';
import Files from "@/components/Files"; 

import { MdOutlineFileDownload, MdOutlineFormatQuote } from 'react-icons/md';

// Function to generate citation
const CitationPopup = ({ citation, onClose }) => {
	const [copyMessage, setCopyMessage] = useState("");
	
	const handleCopy = () => {
		if (!navigator.clipboard) {
			setCopyMessage("Clipboard not supported.");
			setTimeout(() => setCopyMessage(""), 3000);
			return;
		  }
		  
		// Convert HTML to plain text
		const tempElement = document.createElement("div");
		tempElement.innerHTML = citation;
		const plainTextCitation = tempElement.innerText;
	
		// Convert HTML to plain text
		navigator.clipboard.writeText(plainTextCitation)
	      .then(() => {
	        setCopyMessage("Citation copied!");
	        setTimeout(() => setCopyMessage(""), 3000);
	      })
	      .catch(() => {
	        setCopyMessage("Failed to copy.");
	        setTimeout(() => setCopyMessage(""), 3000);
	      });
	};
  
	return (
	  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">	  
		<div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
		  <h2 className="text-lg font-semibold text-ashesi-red mb-4">Citation</h2>
		  
		   {/* Feedback message */}
		   {copyMessage ? 
		   
		    (
			    <div style={{ marginTop: "10px", color: "green" }}>{copyMessage}</div>
			     ) : (
			    <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: citation }}></div>
		    )}
		  
		  <div className="flex justify-end mt-4 gap-2">
			<button
			  className="px-4 py-2 text-sm font-medium bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
			  onClick={onClose}
			>
			  Close
			</button>
			<button
			  className="px-4 py-2 text-sm font-medium bg-ashesi-red text-white rounded-md flex items-center gap-2 hover:bg-red-700 transition"
			  onClick={handleCopy}
			>
			  <FaClipboard /> Copy
			</button>
		  </div>
		</div>
	  </div>
	);
};


export default function CollectionSidebar({ initialCollection, downloadData}) {

      const [collection, setCollections] = useState(initialCollection);
	  const [downloadCount, setDownloadCount] = useState(0);
      const [showPopup, setShowPopup] = useState(false);
	  const [citation, setCitation] = useState("");
	
	  const generateCitation = (collection) => {
	    if (collection.cite) {
	      return collection.cite;
	    }
	
		// Extract author names from objects
		const authorNames = collection.authors?.length
		? collection.authors.map(author => author.name).join(", ")
		: "Unknown Author(s)";
		
	    return `${collection.title || "Untitled Work"}" - ${authorNames} (${collection.date_of_publication ? new Date(collection.date_of_publication).getFullYear() : "No Date"}).<br>${
			collection.doi_link ? `DOI: <a href="${collection.doi_link}" class="text-blue-500 underline">${collection.doi_link}</a>` : "DOI Unavailable"
		  }`;
	  };
	
	  const handleCitationClick = () => {
	    setCitation(generateCitation(collection));
	    setShowPopup(true);
	  };
	  
	  // checking if user is admin
	  const [isAdmin, setIsAdmin] = useState(false);
    
	  useEffect(() => {
		if (localStorage.getItem("user") === "admin") {
		  setIsAdmin(true);
		}
	  }, []);

		useEffect(() => {
			if (Array.isArray(downloadData) && downloadData.length > 0) {
				setDownloadCount(downloadData[0].download_count || 0);
			}
		}, [downloadData]);
    
    return(
        <div className="">
	        { 
		        isAdmin && (
		            <div className="bg-gray-50 px-4 py-4 rounded-lg shadow-md h-auto self-start mb-4">
				        {/* <p className="text-sm font-medium text-ashesi-red">SUBMITTTED BY</p>
				        <p className="text-sm text-gray-600 mt-2">
							Email: <br/> <b>{collection.date_of_publication.slice(0,10)}</b>
						</p>
						<p className="text-sm text-gray-600 mt-2">
							Date: <br/> <b>{collection.date_of_publication.slice(0,10)}</b>
						</p> */}
						<div className="p-3 text-center space-x-2 relative group">
						  Status: <br/>
						    {collection.approval_status === "approved" ?  
							  (<div className="inline-flex flex-col items-center justify-center text-green-600 border-green-300 rounded px-2 py-1 text-xs"> 
								<FaCheck className="mb-1" />
								<span>Approved</span>
							  </div>)  :
							  collection.approval_status === "rejected" ?  
							  (<div className="inline-flex flex-col items-center justify-center text-red-600 border-red-300 rounded px-2 py-1 text-xs"> 
								<FaTimes className="mb-1" />
								<span>Rejected</span>
							  </div>)  : 
							  collection.approval_status === "pending" ?  
							  (<div className="inline-flex flex-col items-center justify-center text-yellow-600 border-yellow-300 rounded px-2 py-1 text-xs"> 
								<FaClock className="mb-1" />
								<span>Pending</span>
							  </div>) : (
								<>
								</>
							  )
							}
						</div>
				    </div>  
		        )
		    }
	        <div className="bg-gray-50 px-4 py-8 rounded-lg shadow-md h-auto self-start">
				
				{/* Download button */}
				<Files collection_id={collection.id} showRoles={false} textContent={"Download"} responseData={downloadData}/>
		
				<CustomButton 
					text="Cite Work"
					bgColor = "bg-gray-50"
					textColor = "text-ashesi-red"
					onClick= {handleCitationClick}
					width = "w-full"
					height = "h-10"
					icon={FaQuoteRight}
					iconPosition="right"
					iconClassName="text-md"
					className="flex items-center justify-between text-sm !font-medium border border-ashesi-red mt-3 py-2 px-4 hover:bg-ashesi-red hover:text-white"
				/>
				
				{showPopup && <CitationPopup citation={citation} onClose={() => setShowPopup(false)} />}
				
				<div className="my-5">
			        {/* <div className="flex items-center gap-4">
			          <FaRegStar className="text-ashesi-red" /> <span>save</span>
			        </div> */}
			        {/* <div className="flex items-center gap-4 mt-3">
			          <MdOutlineFormatQuote  className="text-ashesi-red"/> <span> 432 citations</span>
			        </div> */}
			        <div className="flex items-center gap-4 mt-3">
			          <FiEye className="text-ashesi-red" /> <span>{collection.view_count} views</span>
			        </div>
					<div className="flex items-center gap-4 mt-3">
						<FiDownload className="text-ashesi-red" /> <span>{downloadCount} downloads</span>
					</div>

				</div>
		        
		        <hr className="my-6" />
		        
				<p className="text-sm font-medium text-ashesi-red">DOI</p>
		        
		        <p className="text-sm text-gray-600 mt-2 w-full">
					<Link href={collection.doi_link} className="block truncate cursor-pointer underline hover:text-blue-600"> {collection.doi_link}</Link>
				</p>
		
		        <hr className="my-6" />
		        
		        <p className="text-sm font-medium text-ashesi-red">LICENSE</p>
		        <p className="text-sm text-gray-600 mt-2">
					This dataset is licensed under a 
					<Link href="" className="cursor-pointer underline text-blue-800 hover:text-blue-600"> Creative Commons Attribution 4.0 International (CC BY 4.0) license</Link>
				</p>
				
				<p className="mt-6 text-sm text-gray-600 text-justify">{collection.license ? collection.license : "No additional license"}</p>
		    </div>
		</div>
    );

}
