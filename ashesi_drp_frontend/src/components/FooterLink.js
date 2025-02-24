import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const FooterLink = ({ title, link }) => {
	return (
		<div className="bg-ashesi-gray w-full mb-2 p-2 hover:cursor-pointer hover:bg-gray-400">
			<Link href={link} className="text-white px-2">
				{title}
				<LuArrowRight className="inline-block float-right" />
			</Link>
		</div>
	);
};

export default FooterLink;
