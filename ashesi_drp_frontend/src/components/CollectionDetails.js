"use client";

// import "../../globals.css";
import CustomButton from "@/components/CustomButton";
import Link from 'next/link';
import Image from 'next/image';
import Reviews from "@/components/Reviews"; 
import Files from "@/components/Files"; 
import { useState } from 'react';
import { AiOutlineDown,  AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Skeleton from "react-loading-skeleton";


export default function CollectionsDetails({ initialCollection }) {
    const [collection, setCollections] = useState(initialCollection);
    
    const [showAbstract, setShowAbstract] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showIntro, setShowIntro] = useState(false);
    const [showVariable, setShowVariable] = useState(false);
    const [showFiles, setShowFiles] = useState(false);
    const [showReview, setShowReview] = useState(false);
    
    return(
        <div>
            <div>
            
                {/* Title Section */}
                <div>
                    <hr className="my-3" />

                    <h1 className="text-2xl font-bold text-ashesi-red mt-2">
                        {collection.title}
                    </h1>
                    <p className="mt-2 text-blue-800 underline">
                        <a href="mailto:boakye.reynolds@example.com" className="hover:text-blue-600">Boakye Reynolds</a>,
                        <a href="mailto:stark.tony@example.com" className="hover:text-blue-600 ml-2">Stark Tony</a>,
                        <a href="mailto:omar.havertz@example.com" className="hover:text-blue-600 ml-2">Omar Havertz</a>
                    </p>

                    <div className="mt-10 flex flex-wrap justify-between text-ashesi-gray">
                        <div>
                            <span><strong>DOI:</strong> <Link href={`/${collection.doi_link}`} className="cursor-pointer hover:underline hover:text-blue-600 mt-4">{collection.doi_link}
                            </Link></span>
                        </div>
                        {/* <div>
                            <Link href="/" className="cursor-pointer mt-4 underline text-blue-800 hover:text-blue-600"> request for usage</Link>
                        </div> */}
                        <div>
                            <span><p className=""><strong>Date of publication:</strong> {collection.date_of_publication.slice(0, 10)}</p></span>
                        </div>
                    </div>

                    <div className="mt-2 flex flex-wrap justify-between text-ashesi-gray">
                        <div>
                            <span><p className=""><strong>keywords:</strong>{collection.keywords}</p></span>
                        </div>
                        
                    </div>

                    <hr className="mt-5 mb-8" />
                </div>
                
                {/* Abstract Section */}
                <div>
                    <hr className="my-3" />

                    <div className="cursor-pointer" onClick={() => setShowAbstract(!showAbstract)}>
                        <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
                            ABSTRACT
                            <AiOutlineDown
                                className={`mx-2 transform transition-transform duration-500 ease-in-out ${showAbstract ? 'rotate-180' : 'rotate-0'}`} />
                        </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showAbstract ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mt-4">
                            {collection.abstract}
                        </p>
                    </div>

                    <hr className="mt-5 mb-8" />
                </div>
                
                {/*  INTRODUCTORY PAPER */}
                <div>
                    <hr className="my-3" />

                    <div className="cursor-pointer" onClick={() => setShowIntro(!showIntro)}>
                        <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
                            INTRODUCTORY PAPER
                            <AiOutlineDown
                                className={`mx-2 transform transition-transform duration-500 ease-in-out ${showIntro ? 'rotate-180' : 'rotate-0'}`} />
                        </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showIntro ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mt-4 mb-1"><strong> What do the instances in this dataset represent?</strong></p>
                        <p className="">
                            {collection.abstract}
                        </p>

                        <p className="mt-4 mb-1"><strong>  Has Missing Values?</strong></p>
                        <p className="">No</p>
                    </div>

                    <hr className="mt-5 mb-8" />
                </div>
                
                {/*  DATASET INFORMATION */}
                <div>
                    <hr className="my-3" />

                    <div className="cursor-pointer" onClick={() => setShowInfo(!showInfo)}>
                        <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
                            DATASET INFORMATION
                            <AiOutlineDown
                                className={`mx-2 transform transition-transform duration-500 ease-in-out ${showInfo ? 'rotate-180' : 'rotate-0'}`} />
                        </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showInfo ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mt-4"><Link href="/" className="cursor-pointer underline text-blue-800 hover:text-blue-600 mt-4">  Improving Accessibility Across Multifaceted Web Pages</Link></p>
                        <p className="mt-2">By Boakye Reynolds, Stark Tony, Omar Havertz</p>
                        <p className="mt-2"> Published in Accra, 2023</p>
                    </div>

                    <hr className="mt-5 mb-8" />
                </div>
                
                {/*  VARIABLE */}
                <div>
                    <hr className="my-3" />

                    <div className="cursor-pointer" onClick={() => setShowVariable(!showVariable)}>
                        <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
                            VARIABLE TABLE
                            <AiOutlineDown
                                className={`mx-2 transform transition-transform duration-500 ease-in-out ${showVariable ? 'rotate-180' : 'rotate-0'}`} />
                        </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showVariable ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mt-4 text-center h-32 flex items-center justify-center">
                            {collection.instance_representation}
                        </p>
                    </div>

                    <hr className="mt-5 mb-8" />
                </div>
            
                {/*  FILES */}
                <div>
                    <hr className="my-3" />
                    
                    <div className="cursor-pointer" onClick={() => setShowFiles(!showFiles)}>
                      <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
                        FILES
                        <AiOutlineDown 
                          className={`mx-2 transform transition-transform duration-500 ease-in-out ${showFiles ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showFiles ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="mt-4"></p>
                      
                      <Files />
                    </div>
                    
                    <hr className="mt-5 mb-8" />
                </div>
                
                {/*  REVIEWS */}
                <div>
                    <hr className="my-3" />
                    
                    <div className="cursor-pointer" onClick={() => setShowReview(!showReview)}>
                      <h2 className="text-ashesi-red font-semibold justify-between flex items-center">
                        REVIEWS
                        <AiOutlineDown 
                          className={`mx-2 transform transition-transform duration-500 ease-in-out ${showReview ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </h2>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showReview ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="mt-4"></p>
        
                        <Reviews rating={4.5} comments={collection.comment} />
                      
                    </div>
                    
                    <hr className="mt-5 mb-8" />
                </div>
            </div>
        </div>
    );
}