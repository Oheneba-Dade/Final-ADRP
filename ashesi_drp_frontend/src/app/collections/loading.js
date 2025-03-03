import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../globals.css";

export default function Card() {
  return (
    <div className="relative w-full">
			{/* <Slideshow/> */}
			<Skeleton height={450} baseColor="#dce3e8" highlightColor="#f0f4f8" className="relative w-full h-[60vh] md:h-[60vh] lg:h-[70vh]"/>
			
			{/* <HeroBlock/> */}
			<div className="absolute top-32 left-1/2 transform -translate-x-1/2 lg:translate-y-1/2 md:translate-y-1/4 bg-white shadow-lg rounded-lg p-6 lg:w-2/4 md:w-3/4 sm:w-3/4 text-center z-10">
		        <Skeleton width={550} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
		        <Skeleton width={400} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
		        <Skeleton width="100%" height={80} baseColor="#dce3e8" highlightColor="#f0f4f8" className="mt-6"/>
			
			  <div className="mt-10 flex justify-center gap-4">
		          <Skeleton width={150} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" />
			  </div>
			</div>
			<div className="sm:mt-24 md:mt-24 lg:mt-64 max-h-[800px]"></div>

			<div className="mb-14 mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-6 gap-40">
				<div className="md:col-span-2">
					<div className="flex flex-col items-center bg-gray-50 py-8 rounded-lg justify-center mt-24 mb-8 ml-12 w-96 shadow-md">
						<div className="mb-8">
							<label htmlFor="search-collection" className="mb-4 text-gray-600">
								<Skeleton width={100} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
							</label>
							<Skeleton width={350} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
						</div>
						
						<div className="mb-8">
							<label htmlFor="search-collection" className="mb-4 text-gray-600">
								<Skeleton width={100} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
							</label>
							<Skeleton width={350} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
						</div>
						
						<span className="text-center text-gray-600 mb-4">
							<Skeleton width={100} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
						</span>
						<div className="flex justify-between w-full items-center mb-8">
							<Skeleton width={100} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
			
							<span className="text-gray-600">
								<Skeleton width={50} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
							</span>
							<Skeleton width={100} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
						</div>
						<div className="mb-4">
							<Skeleton width={300} height={40} baseColor="#dce3e8" highlightColor="#f0f4f8" className=""/>
						</div>
					</div>
				</div>
			
				{/* some collections */}
				<div className="md:col-span-4">
				
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
			</div>
		</div>
  );
}