import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function Page() {
	return (
        <div className="container max-w-lg mx-auto mt-40 mb-40">
            <div className="flex flex-row p-5">
                <Image
                    src="/images/logo.webp"
                    alt="Ashesi Logo"
                    width={50}
                    height={55}
                    className="object-contain"
                />
                <div className="font-medium pt-2 pl-10">
                    Data Repository
                </div>
            </div>
            <div className="bg-ashesi-red p-10 rounded-md">
                <div className="flex flex-col p-4">
                    <label className="text-white font-bold pb-2">
                        Username/Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-2 border border-ashesi-red rounded-md w-96 focus:outline-ashesi-red"
                        required
                    />
                </div>
                <div className="flex flex-col p-4">
                    <label className="text-white font-bold pb-2">
                        Password:
                    </label>
                    <input
                        type="numper"
                        id="otp"
                        name="otp"
                        className="p-2 border border-ashesi-red rounded-md w-96 focus:outline-ashesi-red"
                        required
                    />
                </div>
                <div className="p-4 mt-2">
                    {/* <button type="button" className="bg-white">
                        Curick
                    </button> */}
                    <CustomButton
                        text="Login"
                        bgColor="bg-white"
                        textColor="text-black"
                    />
                </div>
            </div>
        </div>

    )
}