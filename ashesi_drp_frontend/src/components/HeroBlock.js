import CustomButton from "@/components/CustomButton";

const HeroBlock = ({ header, subheader, text, visibleButton=false, customButtons = [] }) => {
	return (
		// <div className="relative flex justify-center bg-white shadow-lg rounded-lg p-6 mb-4 z-10">
		// 	<div className="w-3/4 px-16 py-6 -mt-16 text-center shadow-sm">
		// 		<h2 className="text-2xl text-ashesi-red font-bold mb-2">
		// 			{header}
		// 		</h2>
		// 		<h3 className="text-sm text-ashesi-red  mb-2">{subheader}</h3>
		// 		<p className="text-md font-light">{text}</p>
		// 	</div>
		// </div>
		<div>
			<div className="absolute top-32 left-1/2 transform -translate-x-1/2 lg:translate-y-1/2 md:translate-y-1/4 bg-white shadow-lg rounded-lg p-6 lg:w-2/4 md:w-3/4 sm:w-3/4 text-center z-10">
	            <h1 className="text-2xl font-bold text-ashesi-red">{header}</h1>
	            <p className="text-ashesi-red mb-5">{subheader}</p>
	                <p className=""> {text}</p>
				
				{visibleButton && (
				    <div className="mt-10 flex justify-center gap-4">
						{customButtons.length > 0 ? (
				            customButtons.map((button, index) => <div key={index}>{button}</div>)
				          ) : (
				            <>
				              <CustomButton 
				                text="ALL COLLECTIONS" 
				                bgColor="bg-ashesi-red" 
				                width="w-48" 
				                href="/" 
				              />
				            </>
				          )}
					</div>
				)}
			</div>
			{visibleButton && (
			<div className="sm:mt-96 md:mt-96 lg:mt-64 mb-[310px] max-h-[800px]"></div>
			)}
			<div className="sm:mt-96 md:mt-96 lg:mt-40 max-h-[800px]"></div>
		</div>
	);
};

export default HeroBlock;
