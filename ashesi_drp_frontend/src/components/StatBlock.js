"use client";

const StatBlock = ({ title, value }) => {
	return (
		<div className="w-3/4 px-4 py-2 rounded-lg bg-[#F5F5F5] shadow-md mb-2 inline-block">
			<div className="text-2xl font-semibold  text-ashesi-red">
				{title}
			</div>
			<div className="text-sm font-light">{value}</div>
		</div>
	);
};

export default StatBlock;
