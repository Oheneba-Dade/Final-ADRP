"use client";
import "../globals.css";
import Slideshow from "@/components/Slideshow";
import Image from "next/image";
import StatBlock from "@/components/StatBlock";
import HeroBlock from "@/components/HeroBlock";
import CustomButton from "@/components/CustomButton";

export default function About() {
	return (
		<div className="container mx-auto">
			<div >
				<div className="relative w-full"> 
					<Slideshow/>
					<HeroBlock
						header="Welcome to Ashesi Data Repository"
						subheader="Welcome to the heart of Ashesi’s research excellence"
						text="At Ashesi University, we are committed to fostering a culture of academic excellence, collaboration, and ethical research. The Ashesi Research Data Repository (ARDR) is designed to empower our researchers, faculty, and students by offering a secure and dynamic platform for managing, archiving, and sharing research data across all disciplines. 
                        The ARDR is currently home to [X] active researchers, hosting [Y] research datasets, including publicly accessible collections that promote interdisciplinary knowledge sharing. By providing a seamless interface for research data management, Ashesi University aims to support the growing movement towards Open Science and FAIR data practices."
						// visibleButton={true}
					/>
				</div>
				
				<hr className="mb-10" />
				<div className="grid grid-cols-2 gap-32 max-w-5xl mx-auto p-6">
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
						  src="/images/welcome/library.webp"
						  alt="Ashesi Logo"
						  width={4000}
						  height={4000}
						  className="w-auto h-auto rounded-lg"
						/>

						<div className="grid grid-cols-2 gap-2 mb-8">
							<StatBlock title="3.5k" value="academicians" />
							<StatBlock title="3.5k" value="academicians" />
							<StatBlock title="3.5k" value="academicians" />
							<StatBlock title="3.5k" value="academicians" />
						</div>
					</div>
				</div>
				<div className="max-w-5xl mx-auto p-6">
					<hr className="mb-20" />
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
		</div>
	);
}
