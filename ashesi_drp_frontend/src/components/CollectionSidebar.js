"use client";

// import "../../globals.css";
import CustomButton from "@/components/CustomButton";
import Link from 'next/link';
import { useState } from 'react';
import { FaRegStar, FaPython, FaQuoteRight, FaClipboard } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { MdOutlineFileDownload, MdOutlineFormatQuote } from 'react-icons/md';

// Function to generate citation
const CitationPopup = ({ citation, onClose }) => {
	const handleCopy = () => {
		if (!navigator.clipboard) {
		  alert("Clipboard API not supported.");
		  return;
		}
	
		// Convert HTML to plain text
		const tempElement = document.createElement("div");
		tempElement.innerHTML = citation;
		const plainTextCitation = tempElement.innerText;
	
		navigator.clipboard.writeText(plainTextCitation)
		  .then(() => alert("Citation copied to clipboard!"))
		  .catch(() => alert("Failed to copy citation."));
	};
  
	return (
	  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
		<div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
		  <h2 className="text-lg font-semibold text-ashesi-red mb-4">Citation</h2>
		  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: citation }}></div>
		  
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


export default function CollectionSidebar({ initialCollection }) {  
      const [collection, setCollections] = useState(initialCollection);
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
		
	    return `<strong>System-Generated Citation:</strong><br><br>"${collection.title || "Untitled Work"}" - ${authorNames} (${collection.date_of_publication ? new Date(collection.date_of_publication).getFullYear() : "No Date"}).<br>${
			collection.doi_link ? `DOI: <a href="${collection.doi_link}" class="text-blue-500 underline">${collection.doi_link}</a>` : "DOI Unavailable"
		  }`;
	  };
	
	  const handleCitationClick = () => {
	    setCitation(generateCitation(collection));
	    setShowPopup(true);
	  };
    
    return(
        <div className="bg-gray-50 px-4 py-8 rounded-lg shadow-md h-auto self-start">
	        {/* <CustomButton 
				text="DOWNLOAD"
				bgColor = "bg-gray-50"
				textColor = "text-ashesi-red"
				onClick={() => alert("Downloading!")}
				width = "w-full"
				height = "h-10"
				icon={MdOutlineFileDownload}
				iconPosition="right"
				iconClassName="text-xl"
				className="flex items-center justify-between text-sm !font-medium border border-ashesi-red py-2 px-4 hover:bg-ashesi-red hover:text-white"
			/> */}
	        
	        {/* <CustomButton 
				text="IMPORT CODE"
				bgColor = "bg-gray-50"
				textColor = "text-blue-800"
				onClick={() => alert("Importing!")}
				width = "w-full"
				height = "h-10"
				icon={FaPython}
				iconPosition="right"
				iconClassName="text-xl"
				className="flex items-center justify-between text-sm !font-medium border border-blue-800 mt-3 py-2 px-4 hover:bg-blue-800 hover:text-white"
			/> */}
	
			<CustomButton 
				text="CITE WORK"
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
	        </div>
	        
	        <hr className="my-6" />
	        
			<p className="text-sm font-medium text-ashesi-red">DOI</p>
	        <p className="text-sm text-gray-600 mt-2">
				<Link href={`/${collection.doi_link}`} className="cursor-pointer text-xs underline hover:text-blue-600"> {collection.doi_link}</Link>
			</p>
	
	        <hr className="my-6" />
	        
	        <p className="text-sm font-medium text-ashesi-red">LICENSE</p>
	        <p className="text-sm text-gray-600 mt-2">
				This dataset is licensed under a 
				<Link href="/" className="cursor-pointer underline text-blue-800 hover:text-blue-600"> Creative Commons Attribution 4.0 International (CC BY 4.0) license</Link>
			</p>
			
			<p className="mt-6 text-sm text-gray-600 text-justify">{collection.license ? collection.license : "No additional license"}</p>
	    </div>
    );

}
