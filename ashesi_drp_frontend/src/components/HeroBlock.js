const HeroBlock = ({ header, subheader, text }) => {
	return (
		<div className="relative flex justify-center mb-4">
			<div className="w-3/4 bg-[#F8F8F8] px-16 py-6 -mt-16 text-center shadow-sm">
				<h2 className="text-2xl text-ashesi-red font-bold mb-2">
					{header}
				</h2>
				<h3 className="text-sm text-ashesi-red  mb-2">{subheader}</h3>
				<p className="text-md font-light">{text}</p>
			</div>
		</div>
	);
};

export default HeroBlock;
