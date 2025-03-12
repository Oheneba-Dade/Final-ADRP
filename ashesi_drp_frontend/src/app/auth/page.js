"use client";
import "../globals.css";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import CustomButton from "@/components/CustomButton";
import CountdownTimer from "@/components/Countdown";
import Image from "next/image";
import AxiosInstance from "@/components/Axios";

export default function Page() {
    const router = useRouter()
    const [timerActive, setTimerActive] = useState(true);

    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const requestCode = () => {
        setTimerActive(true);
        GETOtp();
    }

    const emailValidation = () => {
        const regEx = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g;
        if(!regEx.test(email) && email !== "email"){
            setEmailMsg("Invalid Email Address!");
            return false;
        }
        else{
            setEmailMsg("");
            return true;
        }
    }


    const [otp, setOtp] = useState(new Array(6).fill(""));
    const handleOtpAdd = (e, index) => {
        // if(isNaN(e.target.value)) {
        //     return false;
        // }
        setOtp([...otp.map((data, indx)=>(indx === index? e.target.value.toUpperCase():data))])

        if(e.target.value && e.target.nextSibling){
            e.target.nextSibling.focus()
        }
    }

    const handleOtpBackspace = (e, index) => {
        if (e.key === "Backspace") {
            if (otp[index] !== "") {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                document.getElementById(`otp-${index - 1}`).focus();
            }
        }
    };

    const GETOtp = async () => {
        try {
            console.log(email);
            const response = await AxiosInstance.get("get_otp", {
                params: {email}
            });
            // setOtpResponse(response.data);
            console.log("Otp Response: ", response.data)
        } catch (error){
            console.log("Error sending Otp: ", error)
        }
    }


    const [step, setStep] = useState(1);
    const handleNext = () => { 
        const state = emailValidation();
        if(state){
            GETOtp();
            setStep(2);
        } 
    }

    const handleBack = () => {
        // 1 is the username step and 2 is the password step
        if (step === 1){
            setStep(2);
        }
        else if (step === 2){
            setStep(1);
        }
    }

    const handleLogin = async () => {
        try {
            const otpStr = otp.join("")
            const response = await AxiosInstance.post("login", {
                "email": email,
                "otp": otpStr
            });
            console.log("Otp Response: ", response.data)
        } catch (error){
            console.log("Error sending Otp: ", error)
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

            <div className="bg-ashesi-red p-8 rounded-md">
                {step === 1 ? (
                    <div>
                        <div className="flex flex-col p-4 mr-8">
                            <label className="text-white font-bold pb-2">
                                Username/Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value = {email}
                                onChange = {handleEmailChange}
                                className="p-2 border border-ashesi-red rounded-md w-96 focus:outline-ashesi-red"
                                required 
                            />
                            <div className="flex flex-row mt-2 text-white justify-between">
                                <div>
                                    {emailMsg}
                                </div>
                                <div>
                                    <button className="underline rm-1">help?</button>
                                </div>
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
                    <div className="flex flex-col p-4 items-center h-50">
                        <label className="text-white font-bold mb-4">
                            Enter OTP
                        </label>
                        
                        <div className="flex flex-row gap-2 ">   
                            {
                                otp.map((data, i)=>{
                                    return <input
                                    // type="numper"
                                    value = {data}
                                    id={`otp-${i}`}
                                    name="otp"
                                    maxLength={1}
                                    key = {i}
                                    className = "w-12 h-16 text-center text-xl font-semibold rounded-md focus:outline-2 caret-transparent uppercase"
                                    onChange={(e)=>handleOtpAdd(e, i)}
                                    onKeyDown={(e) => {
                                        if(e.key === "Backspace"){
                                            handleOtpBackspace(e, i)
                                        }
                                        if(e.key === "Enter"){
                                            console.log(otp.join())
                                        }
                                    }}      
                                />
                                })
                            }
                        </div>
                    </div> 
                    <div className="flex flex-row mr-10 mt-1 text-white bold-sm ml-14 gap-1">
                        <button disabled={timerActive} onClick = {requestCode}>Request Code</button>
                        <div>
                            {timerActive && (
                            <div className="flex flex-row text-ashesi-gray gap-1">
                                <span>in</span>
                                <CountdownTimer setTimerActive={setTimerActive}/>
                                <span>seconds</span>
                            </div>
                             )}
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
                                onClick={handleBack}
                                // className="font-light"
                            />
                        </div>
                        <div className="">
                            <CustomButton
                                text="Login"
                                bgColor="bg-white"
                                textColor="text-black"
                                width="w-50"
                                height="h-10"
                                onClick={handleLogin}
                            />
                        </div>
                    </div> 
                </div>
                )}
            </div>
        </div>

    )
}