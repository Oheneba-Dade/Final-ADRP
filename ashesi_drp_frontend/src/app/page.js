import Slideshow from "@/components/Slideshow";
import "./globals.css";
import CustomButton from "@/components/CustomButton";
import Image from "next/image"  
import Link from 'next/link';
import HeroBlock from "@/components/HeroBlock";

export default function Home() {
	return (
		<div className="relative w-full">
			<Slideshow/>
			<HeroBlock
				header="Welcome to Ashesi Data Repository"
				subheader="Welcome to the heart of Ashesi’s research excellence"
				text="At Ashesi University, we are committed to fostering a culture of academic 
					excellence, collaboration, and ethical research. The Ashesi Research Data 
					Repository (ARDR) is designed to empower our researchers, faculty, and students 
					by offering a secure and dynamic platform for managing, archiving, and sharing  
					research data across all disciplines.
					 The ARDR is currently home to [X] active researchers, hosting [Y] research 
					datasets, including publicly accessible collections that promote interdisciplinary 
					knowledge sharing. By providing a seamless interface for research data 
					management, Ashesi University aims to support the growing movement towards 
					Open Science and FAIR data practices."
				visibleButton={true} 
				customButtons={
					[
						<CustomButton 
							text="ALL COLLECTIONS" 
							bgColor="bg-ashesi-gray" 
							width="w-48" 
							href="/" 
						/>,
						<CustomButton 
							text="CONTRIBUTE" 
							href="/"  
						/>
					]
				}
			/>
			
			{/* some collections */}
			<div className="mb-14 mx-auto w-full h-[600px] max-w-4xl overflow-y-auto pr-10 custom-scrollbar">
				{/* first */}
				<div className="py-10 px-4 border-b ">
				  <h2 className="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p className="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
					    <Link href="/collection" className="text-ashesi-red font-light cursor-pointer hover:font-medium">see more</Link>
				  </p>
				
				  <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">doi:</span> 
				      <Link href="/" className="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span className="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* Second */}
				<div className="py-10 px-4 border-b">
				  <h2 className="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p className="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" className="text-ashesi-red cursor-pointer font-light hover:font-medium">see more</Link>
				  </p>
				
				  <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">doi:</span> 
				      <Link href="/" className="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span className="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* third */}
				<div className="py-10 px-4 border-b">
				  <h2 className="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p className="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" className="text-ashesi-red cursor-pointer font-light hover:font-medium">see more</Link>
				  </p>
				
				  <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">doi:</span> 
				      <Link href="/" className="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span className="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* fourth */}
				<div className="py-10 px-4 border-b">
				  <h2 className="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p className="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" className="text-ashesi-red cursor-pointer">see more</Link>
				  </p>
				
				  <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">doi:</span> 
				      <Link href="/" className="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span className="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* fifth */}
				<div className="py-10 px-4 border-b">
				  <h2 className="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p className="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" className="text-ashesi-red cursor-pointer">see more</Link>
				  </p>
				
				  <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">doi:</span> 
				      <Link href="/" className="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span className="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* sixth */}
				<div className="py-10 px-4 border-b">
				  <h2 className="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p className="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" className="text-ashesi-red cursor-pointer">see more</Link>
				  </p>
				
				  <div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div className="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">doi:</span> 
				      <Link href="/" className="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span className="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>  
		    </div>
		    <div className="flex flex-col items-center justify-center mb-20">
                <CustomButton 
			        text="view all collections" 
			        bgColor="bg-ashesi-gray" 
			        width="w-48" 
			        href="/"
		        />
		    </div>
		</div>
	);
}
