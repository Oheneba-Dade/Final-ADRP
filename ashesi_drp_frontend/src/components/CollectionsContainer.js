"use client";
import { useState} from "react";
import CollectionItem from "@/components/CollectionItem";
import CollectionsPagination from "@/components/CollectionsPagination";
import Filter from "@/components/Filter";
import Skeleton from "react-loading-skeleton";

export default function CollectionsContainer({ initialCollections, filterOn=true }) {
    const [collections, setCollections] = useState(initialCollections);
    const [loading, setLoading] = useState(false);

    // Function to fetch a specific page
    const fetchPage = async (url) => {
        if (!url) return;

        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCollections(data);
        } catch (error) {
            console.error("Error fetching collections:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mb-14 mx-auto w-full grid grid-cols-1 md:grid-cols-6 gap-20 px-12">
            
            {
                filterOn && (
                    <div className="md:col-span-2 mt-10">
                        <Filter />
                    </div>
                )
            }
        
            <div className={filterOn ? "md:col-span-4 max-w-3xl" : "md:col-span-6 max-w-3xl"}>
                {loading ? (
                    <div className="py-10 px-4 border-b ">
                        {/* first */}
                        <div className="py-10 px-4 border-b ">
                          <Skeleton width={550} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          <Skeleton height={100} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
                            <Skeleton width={210} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                            <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          </div>
                                
                          <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
                            <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                            <Skeleton width={250} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          </div>
                        </div>
                            
                            {/* Second */}
                        <div className="py-10 px-4 border-b ">
                          <Skeleton width={550} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          <Skeleton height={100} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
                            <Skeleton width={210} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                            <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          </div>
                                
                          <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
                            <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                            <Skeleton width={250} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          </div>
                        </div>
                            
                            {/* Third */}
                        <div className="py-10 px-4 border-b ">
                          <Skeleton width={550} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          <Skeleton height={100} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
                            <Skeleton width={210} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                            <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          </div>
                                
                          <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
                            <Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                            <Skeleton width={250} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
                          </div>
                        </div>
                    </div>
                ) : (

                    <>
                        <ul>
                            {collections.results.map((collection) => (
                                <CollectionItem
                                    key={collection.id}
                                    collection_id={collection.id}
                                    title={collection.title}
                                    abstract={collection.abstract}
                                    date_of_publication={collection.date_of_publication}
                                    doi_link={collection.doi_link}
                                    keywords={collection.keywords}
                                />
                            ))}
                        </ul>
                        
                        {
                            filterOn && (
                                <CollectionsPagination
                                    nextUrl={collections.next}
                                    previousUrl={collections.previous}
                                    onPageChange={fetchPage}
                                />
                            )
                        }
                    </>
                )}
            </div>
        </div>
    );
}