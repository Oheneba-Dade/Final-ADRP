import "../globals.css";
import Filter from "@/components/Filter";
import Slideshow from "@/components/Slideshow";
import CustomButton from "@/components/CustomButton";
import HeroBlock from "@/components/HeroBlock";
import {BASE_URL} from "@/utils/constants";

export default async function Collections() {
	const data = await fetch(`${BASE_URL}/get_all_collections`)
	const collections = await data.json();
	console.log(collections.results);
	return (
		<div>
			<div className="relative w-full">
				<Slideshow/>
				<HeroBlock
					header="Welcome to Ashesi Data Repository"
					subheader="Welcome to ADR"
					text="The heart of Ashesi's Research"
					visibleButton={true} 
					customButtons={
						[
							<CustomButton 
								text="CONTRIBUTE" 
								bgColor="bg-ashesi-red" 
								width="w-48" 
								href="/add_dataset" 
							/>,
						]
					}
				/>
				<div className="sm:mt-24 md:mt-24 lg:mt-12 max-h-[800px]"></div>
				
				
				<div className="mb-14 mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-6 gap-40">
					<div className="md:col-span-2">
						<Filter />
					</div>
		
					{/* some collections */}
						<ul className="md:col-span-4">
							{collections.results.map((collection) => (
								<li key={collection.id}>
									<h2>{collection.title}</h2>
									<a href={collection.doi_link} target="_blank" rel="noopener noreferrer">
										Read More
									</a>
								</li>
							))}
						</ul>
				</div>
			</div>
		</div>
	);
}
