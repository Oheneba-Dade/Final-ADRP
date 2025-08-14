"use client";
import CollectionItem from "@/components/CollectionItem";
import CollectionsPagination from "@/components/CollectionsPagination";
import Filter from "@/components/Filter";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { BASE_URL } from "@/utils/constants";
import Skeleton from "react-loading-skeleton";

export default function CollectionsContainer({
	initialCollections,
	filterOn = true,
}) {
	const [collections, setCollections] = useState(initialCollections);
	const [loading, setLoading] = useState(false);
	const [animationData, setAnimationData] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [numberCollections, setNumberCollections] = useState(0);

	useEffect(() => {
		fetch("/search-not-found-animation.json")
			.then((response) => response.json())
			.then((data) => setAnimationData(data))
			.catch((error) => console.error("Error loading animation:", error));
	}, []);

	useEffect(() => {
		if (initialCollections && initialCollections.count) {
			setNumberCollections(initialCollections.count);
		}
	}, [initialCollections]);

	const fetchPage = async (url) => {
		if (!url) return;

		setLoading(true);
		try {
			const response = await fetch(url, {
				cache: "no-store",
				next: { revalidate: 0 },
			});
			const data = await response.json();

			if (data && data.results) {
				setCollections(data);
				setCurrentPage(data.current_page);
				setNumberCollections(data.count);
			} else {
				// Handle the case when the data doesn't have results
				setCollections({
					results: [],
					next: null,
					previous: null,
					count: 0,
				});
				setNumberCollections(0);
			}
		} catch (error) {
			console.error("Error fetching datasets:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleFilterResults = (filteredData) => {
		// Check if the data has the expected structure
		if (filteredData && filteredData.results !== undefined) {
			setCollections(filteredData);
		} else {
			// Handle the case where the response doesn't have the expected structure
			setCollections({
				results: [],
				next: null,
				previous: null,
				count: 0,
			});
		}
	};

	// Handle filter reset
	const handleResetFilter = async () => {
		setLoading(true);
		try {
			const response = await fetch(`${BASE_URL}/get_all_collections/`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				cache: "no-store",
				next: { revalidate: 0 },
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			setCollections(data);
		} catch (error) {
			console.error("Error resetting datasets:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="mb-8 sm:mb-10 md:mb-14 w-full">
			<div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-20">
				{filterOn && (
					<div className="lg:w-auto lg:min-w-[280px] xl:min-w-[320px] lg:sticky lg:top-24 lg:self-start lg:h-fit">
						<div className="bg-white rounded-lg shadow-sm">
							<Filter
								onFilterResults={handleFilterResults}
								onResetFilter={handleResetFilter}
								setLoading={setLoading}
							/>
						</div>
					</div>
				)}
				<div
					className={`w-full ${
						filterOn ? "lg:flex-1" : "max-w-3xl mx-auto"
					}`}
				>
					{loading ? (
						<LoadingSkeleton />
					) : (
						<>
							{collections.results && collections.count > 0 ? (
								<>
									<ul className="space-y-4 sm:space-y-6">
										{collections.results.map(
											(collection) => (
												<CollectionItem
													key={collection.id}
													collection_id={
														collection.id
													}
													title={collection.title}
													authors={collection.authors}
													abstract={
														collection.abstract
													}
													date_of_publication={
														collection.date_of_publication
													}
													doi_link={
														collection.doi_link
													}
													keywords={
														collection.keywords
													}
												/>
											)
										)}
									</ul>

									{filterOn && (
										<CollectionsPagination
											nextUrl={collections.next}
											previousUrl={collections.previous}
											onPageChange={fetchPage}
											currentPage={currentPage}
											numberCollections={
												numberCollections
											}
										/>
									)}
								</>
							) : (
								<NoResultsFound animationData={animationData} />
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

function LoadingSkeleton() {
	return (
		<div className="py-10 px-4 border-b">
			<div className="py-10 px-4 border-b">
				<Skeleton
					width="100%"
					height={30}
					baseColor="#dce3e8"
					highlightColor="#f0f4f8"
				/>
				<Skeleton
					height={100}
					baseColor="#dce3e8"
					highlightColor="#f0f4f8"
				/>
				<div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
				</div>

				<div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
					<Skeleton
						width="50%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
				</div>
			</div>

			{/* Second skeleton */}
			<div className="py-10 px-4 border-b">
				<Skeleton
					width="100%"
					height={30}
					baseColor="#dce3e8"
					highlightColor="#f0f4f8"
				/>
				<Skeleton
					height={100}
					baseColor="#dce3e8"
					highlightColor="#f0f4f8"
				/>
				<div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
				</div>

				<div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
					<Skeleton
						width="50%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
				</div>
			</div>

			<div className="py-10 px-4 border-b">
				<Skeleton
					width="100%"
					height={30}
					baseColor="#dce3e8"
					highlightColor="#f0f4f8"
				/>
				<Skeleton
					height={100}
					baseColor="#dce3e8"
					highlightColor="#f0f4f8"
				/>
				<div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
				</div>

				<div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
					<Skeleton
						width="50%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
				</div>
			</div>

			<div className="py-10 px-4 border-b">
				<Skeleton
					width="100%"
					height={30}
					baseColor="#dce3e8"
					highlightColor="#f0f4f8"
				/>
				<Skeleton
					height={100}
					baseColor="#dce3e8"
					highlightColor="#f0f4f8"
				/>
				<div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
				</div>

				<div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
					<Skeleton
						width="45%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
					<Skeleton
						width="50%"
						height={30}
						baseColor="#dce3e8"
						highlightColor="#f0f4f8"
					/>
				</div>
			</div>
		</div>
	);
}

function NoResultsFound({ animationData }) {
	return (
		<div className="flex flex-col items-center justify-center text-white px-6">
			{animationData && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="w-100 h-100 lg:w-[300px] lg:h-[300px]"
				>
					<Lottie animationData={animationData} loop={true} />
				</motion.div>
			)}
			<div className="flex flex-col items-center justify-center py-20">
				<p className="text-x33l text-gray-600 mb-4">
					Sorry, no results found
				</p>
				<p className="text-sm text-gray-500">
					Try adjusting your search criteria
				</p>
			</div>
		</div>
	);
}
