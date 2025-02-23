import Slideshow from "@/components/slideshow";
import "./globals.css";
import CustomButton from "@/components/CustomButton";
import Image from "next/image"  
import Link from 'next/link';
import HeroBlock from "@/components/HeroBlock";

export default function Homme() {
	return (
		<div class="relative w-full">
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
			/>
			
			{/* some collections */}
			<div className="mb-14 overflow-y-auto">
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
