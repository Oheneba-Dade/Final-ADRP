"use client";
import "../globals.css";

import Image from "next/image";
import StatBlock from "@/components/StatBlock";
import HeroBlock from "@/components/HeroBlock";
import CustomButton from "@/components/CustomButton";

export default function About() {
	return (
		<div>
			<div>
				<div>
					<Image
						src="/images/about-page-hero.webp"
						alt="Ashesi University"
						layout="responsive"
						width={1000} // These values define the aspect ratio, not the actual size
						height={100}
					/>
					<HeroBlock
						header="Welcome to the ARDR"
						subheader="Welcome to the heart of Ashesi’s research excellence"
						text="At Ashesi University, we are committed to fostering a culture of academic excellence, collaboration, and ethical research. The Ashesi Research Data Repository (ARDR) is designed to empower our researchers, faculty, and students by offering a secure and dynamic platform for managing, archiving, and sharing research data across all disciplines. 
                        The ARDR is currently home to [X] active researchers, hosting [Y] research datasets, including publicly accessible collections that promote interdisciplinary knowledge sharing. By providing a seamless interface for research data management, Ashesi University aims to support the growing movement towards Open Science and FAIR data practices."
					/>
				</div>
				<div className="flex justify-center gap-8 mt-6 mb-16">
					<CustomButton
						text="ALL COLLECTIONS"
						bgColor="bg-ashesi-gray"
						textColor="text-white"
						width="w-48"
						height="h-14"
						borderRadius="rounded-lg"
					/>

					<CustomButton
						text="CONTRIBUTE"
						bgColor="bg-ashesi-red"
						textColor="text-white"
						width="w-48"
						height="h-14"
						borderRadius="rounded-lg"
					/>
				</div>
				<hr className="mb-10" />
				<div className="grid grid-cols-2 gap-32">
					{/* First Column */}
					<div className="grid grid-rows-4 gap-2">
						<div className="row-span-1">
							<div>
								<span className="block text-ashesi-red">
									OUR GOAL IS TO ADVANCE
								</span>
								<p className="text-ashesi-red text-2xl font-medium">
									RESEARCH <br /> EXCELLENCE
								</p>
							</div>
						</div>

						<div className="row-span-3">
							<p>
								Sed ut perspiciatis unde omnis iste natus error
								sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae
								ab illo inventore veritatis et quasi architecto
								beatae vitae dicta sunt explicabo. Nemo enim
								ipsam voluptatem quia voluptas sit aspernatur
								aut odit aut fugit, sed quia consequuntur magni
								dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui Sed ut
								perspiciatis unde omnis iste natus error sit
								voluptatem accusantium doloremque laudantium,
								totam
							</p>
						</div>
					</div>

					<div className="grid grid-rows-2">
						<Image
							src="/images/logo.webp"
							alt="Ashesi Logo"
							width={500}
							height={100}
							className="w-full h-20 object-contain"
						/>

						<div className="grid grid-cols-2 gap-2 mb-8">
							<StatBlock title="3.5k" value="academicians" />
							<StatBlock title="3.5k" value="academicians" />
							<StatBlock title="3.5k" value="academicians" />
							<StatBlock title="3.5k" value="academicians" />
						</div>
					</div>
				</div>
				<hr className="mb-20" />
				<hr className="mb-10" />
				<h3 className="text-ashesi-red uppercase font-medium mb-8">
					The Ashesi Research Data Repository allows our academic
					community to:
				</h3>
				<ul className="list-disc mb-16">
					<li className="mb-4">
						<span className="font-semibold">
							Publish Research Data:
						</span>{" "}
						Share your findings with the global academic community,
						ensuring your work reaches beyond borders.
					</li>
					<li className="mb-4">
						<span className="font-semibold">
							Publish Research Data:
						</span>{" "}
						Share your findings with the global academic community,
						ensuring your work reaches beyond borders.
					</li>
					<li className="mb-4">
						<span className="font-semibold">
							Publish Research Data:
						</span>{" "}
						Share your findings with the global academic community,
						ensuring your work reaches beyond borders.
					</li>
					<li className="mb-4">
						<span className="font-semibold">
							Publish Research Data:
						</span>{" "}
						Share your findings with the global academic community,
						ensuring your work reaches beyond borders.
					</li>
					<li className="mb-4">
						<span className="font-semibold">
							Publish Research Data:
						</span>{" "}
						Share your findings with the global academic community,
						ensuring your work reaches beyond borders.
					</li>
					<li className="mb-4">
						<span className="font-semibold">
							Publish Research Data:
						</span>{" "}
						Share your findings with the global academic community,
						ensuring your work reaches beyond borders.
					</li>
				</ul>
				<hr className="mb-10" />
			</div>
		</div>
	);
}
