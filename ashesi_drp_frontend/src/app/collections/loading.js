import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../globals.css";

export default function Card() {
  return (
    <div className="relative w-full">
			<div className="mb-14 mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-6 gap-40 mt-16">
				<div className="md:col-span-2 mt-8" >
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

						<div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
							<Skeleton width={210} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
							<Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</div>

						<div className="mt-4 flex flex-wrap justify-between text-sm text-ashesi-gray">
							<Skeleton width={210} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
							<Skeleton width={200} height={30} baseColor="#dce3e8" highlightColor="#f0f4f8"/>
						</div>

					</div>
				</div>
				{/* some collections */}
			<div className="md:col-span-4 mt-8">

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