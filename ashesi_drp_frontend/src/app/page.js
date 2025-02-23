import Slideshow from "@/components/slideshow";
import "./globals.css";
import CustomButton from "@/components/CustomButton";
import Image from "next/image"  
import Link from 'next/link';

export default function Homme() {
	return (
		<div class="relative w-full">
			<Slideshow/>
			<div className="absolute top-32 left-1/2 transform -translate-x-1/2 lg:translate-y-1/2 md:translate-y-1/4 bg-white shadow-lg rounded-lg p-6 w-2/4 text-center z-10">
                <h1 className="text-2xl font-bold text-ashesi-red">Welcome to Ashesi Data Repository</h1>
                <p className="text-ashesi-red mb-5">Welcome to the heart of Ashesi’s research excellence</p>
                <p className=""> At Ashesi University, we are committed to fostering a culture of academic 
					excellence, collaboration, and ethical research. The Ashesi Research Data 
					Repository (ARDR) is designed to empower our researchers, faculty, and students 
					by offering a secure and dynamic platform for managing, archiving, and sharing 
					research data across all disciplines.
					 The ARDR is currently home to [X] active researchers, hosting [Y] research 
					datasets, including publicly accessible collections that promote interdisciplinary 
					knowledge sharing. By providing a seamless interface for research data 
					management, Ashesi University aims to support the growing movement towards 
					Open Science and FAIR data practices.
				</p>
				
			    <div class="mt-10 flex justify-center gap-4">
					<CustomButton 
				        text="ALL COLLECTIONS" 
				        bgColor="bg-ashesi-gray" 
				        width="w-48" 
				        href="/"
			        />
					<CustomButton 
						text="CONTRIBUTE" 
						href="/" 	
					/>
			    </div>
			</div>
			
			{/* some collections */}
			<div className="mb-14 sm:mt-96 md:mt-96 lg:mt-41 max-h-[800px] overflow-y-auto">
				{/* first */}
				<div class="max-w-4xl mx-auto p-6 border-b ">
				  <h2 class="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p class="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
					    <Link href="/" className="text-ashesi-red cursor-pointer">see more</Link>
				  </p>
				
				  <div class="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span class="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span class="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div class="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span class="font-semibold">doi:</span> 
				      <Link href="/" className="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span class="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* Second */}
				<div class="max-w-4xl mx-auto p-6 border-b">
				  <h2 class="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p class="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" class="text-ashesi-red cursor-pointer">see more</Link>
				  </p>
				
				  <div class="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div class="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span class="font-semibold">doi:</span> 
				      <Link href="/" class="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span class="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* third */}
				<div class="max-w-4xl mx-auto p-6 border-b">
				  <h2 class="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p class="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" class="text-ashesi-red cursor-pointer">see more</Link>
				  </p>
				
				  <div class="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div class="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span class="font-semibold">doi:</span> 
				      <Link href="/" class="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span class="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* fourth */}
				<div class="max-w-4xl mx-auto p-6 border-b">
				  <h2 class="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p class="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" class="text-ashesi-red cursor-pointer">see more</Link>
				  </p>
				
				  <div class="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div class="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span class="font-semibold">doi:</span> 
				      <Link href="/" class="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span class="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* fifth */}
				<div class="max-w-4xl mx-auto p-6 border-b">
				  <h2 class="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p class="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" class="text-ashesi-red cursor-pointer">see more</Link>
				  </p>
				
				  <div class="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div class="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span class="font-semibold">doi:</span> 
				      <Link href="/" class="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span class="font-semibold">keywords:</span> Accessibility, Design, Flexibility
				    </div>
				  </div>
				</div>
				
				{/* sixth */}
				<div class="max-w-4xl mx-auto p-6 border-b">
				  <h2 class="italic text-lg font-semibold text-ashesi-red">
				        Improving Accessibility Across Multifaceted Web Pages
				  </h2>
				  
				  <p class="text-ashesi-gray mt-2">
					    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
					    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
					    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
					    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui...
						<Link href="/" class="text-ashesi-red cursor-pointer">see more</Link>
				  </p>
				
				  <div class="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span className="font-semibold">date of publication:</span> 24 - 09 - 2024
				    </div>
				    <div>
				      <span className="font-semibold">authors:</span> Boakye R., Stark T., Omar H.
				    </div>
				  </div>
				
				  <div class="mt-1 flex flex-wrap justify-between text-sm text-ashesi-gray">
				    <div>
				      <span class="font-semibold">doi:</span> 
				      <Link href="/" class="cursor-pointer"> 10.1111/j.1753-4887.2008.00114.x</Link>
				    </div>
				    <div>
				      <span class="font-semibold">keywords:</span> Accessibility, Design, Flexibility
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
