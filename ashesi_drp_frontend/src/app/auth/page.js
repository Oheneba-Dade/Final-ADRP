"use client";
import "../globals.css";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
// import { FaUser, IoIosHelp  } from "react-icons/fa";

export default function Page() {
    const router = useRouter()

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const handleOtpChange = (e, index) => {
        if(isNaN(e.target.value)) {
            return false;
        }
        setOtp([...otp.map((data, indx)=>(indx === index? e.target.value:data))])

        if(e.target.value && e.target.nextSibling){
            e.target.nextSibling.focus()
        }
    }
    const handleBackspace = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp); 
    }

    const [step, setStep] = useState(1);
    const handleNext = () => {
        // 1 is the username step and 2 is the password step
        if (step === 1){
            setStep(2);
            // send otp to them as well
        }
        else if (step === 2){
            setStep(1);
        }
    }

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
                {step === 1 ? (
                    <div>
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
                            {/* some informative text at the beginning */}
                            {/* change to link later */}
                            <div className="flex flex-row justify-end mr-6 mt-1">
                                <h5 className="text-white underline">help?</h5>
                            </div>
                        </div>

                        <div className="flex flex-row justify-end p-4 mt-2 mr-4">
                            <div className="mr-4">
                                <CustomButton
                                    text="Back"
                                    bgColor="bg-ashesi-gray"
                                    textColor="text-white"
                                    width="w-50"
                                    height="h-10"
                                    onClick={() => router.back()}
                                />
                            </div>
                            <div className="">
                                <CustomButton
                                    text="Next"
                                    bgColor="bg-white"
                                    textColor="text-black"
                                    width="w-50"
                                    height="h-10"
                                    onClick={handleNext}
                                />
                            </div>
                        </div>

                    </div>   
                ) : (
                <div>
                    <div className="flex flex-col p-4 items-center">
                        <label className="text-white font-bold pb-2">
                            Enter OTP
                        </label>
                        <div className="flex flex-row gap-2 h-full">   
                            {
                                otp.map((data, i)=>{
                                    return <input
                                    type="numper"
                                    value = {data}
                                    id="otp"
                                    name="otp"
                                    maxLength={1}
                                    className="border border-ashesi-red rounded-md w-10 focus:outline-black text-center"
                                    onChange={(e)=>handleOtpChange(e, i)}
                                    onKeyDown={(e) => {
                                        if(e.key === "Backspace"){
                                            handleBackspace(e, i)
                                        }
                                    }}
                                    // required
                                />
                                })
                            }
                        </div>
                        {/* some informative text at the beginning */}
                        {/* <div className="flex flex-row justify-end mr-6 mt-1">
                            <h5 className="text-white underline">help?</h5>
                        </div> */}
                    </div> 
                    <div className="flex flex-row justify-end p-4 mt-2 mr-4">
                        <div className="mr-4">
                            <CustomButton
                                text="Back"
                                bgColor="bg-ashesi-gray"
                                textColor="text-white"
                                width="w-50"
                                height="h-10"
                                onClick={handleNext}
                                // className="font-light"
                            />
                        </div>
                        <div className="">
                            <CustomButton
                                text="Submit"
                                bgColor="bg-white"
                                textColor="text-black"
                                width="w-50"
                                height="h-10"
                                // onClick={handleNext} join array and verify
                            />
                        </div>
                    </div> 
                </div>
                )}
            </div>
        </div>

    )
}