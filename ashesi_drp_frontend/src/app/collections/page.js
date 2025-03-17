import "../globals.css";
import Slideshow from "@/components/Slideshow";
import CustomButton from "@/components/CustomButton";
import HeroBlock from "@/components/HeroBlock";
import CollectionsContainer from "@/components/CollectionsContainer";
import { BASE_URL } from "@/utils/constants";

export default async function Collections() {
	const data = await fetch(`${BASE_URL}/get_all_collections`);
	const initialCollections = await data.json();
	return (
		<div>
			<div className="relative w-full">
				<Slideshow/>
				<HeroBlock
					header="Welcome to Ashesi Data Repository"
					subheader="Welcome to ADR"
					text="The heart of Ashesi's Research"
					visibleButton={true}
					customButtons={[
						<CustomButton
							text="CONTRIBUTE"
							bgColor="bg-ashesi-red"
							width="w-48"
							href="/add_dataset"
						/>,
					]}
				/>
				<div className="sm:mt-24 md:mt-24 lg:mt-12 max-h-[800px]"></div>

				<div className="mb-4 mx-auto w-full grid grid-cols-1 md:grid-cols-6 gap-10 px-12">
					<div className="md:col-span-2">
						{/*empty div to help with alignment*/}
					</div>
					<h1 className="md:col-span-4 font-semibold text-xl">
						PUBLISHED COLLECTIONS
					</h1>
				</div>

				<CollectionsContainer initialCollections={initialCollections} />
			</div>
		</div>
	);
}