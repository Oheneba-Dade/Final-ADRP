"use client";
import "../../globals.css";
import {useState, useRef, useEffect} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import AxiosInstance from "@/auth_lib/axios";
import Link from "next/link";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        f_name: "",
        l_name: ""
    });
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const purpose = useSearchParams().get("p") || "";

    // can only access after login
    useEffect(() => {
        const fetchUser = async () => {
            const jwt = localStorage.getItem("jwt");

            if (!jwt || !purpose) {
                router.push("/auth"); // Redirect to login if no token
                return;
            }

            if (purpose === "update") {
                setLoading(true);
                try {
                    const res = await AxiosInstance.get("get_user_details", {
                        headers: {
                            "content-type": "application/json"
                        },
                    });

                    // Update formData properly
                    setFormData((prev) => ({
                        ...prev,
                        f_name: res.data.f_name,
                        l_name: res.data.l_name,
                    }));
                } catch (err) {
                    setMessage(err.response?.data?.error || "Something went wrong ❌");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchUser();
    }, [purpose, router]);


    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        if (formData.f_name === "" || formData.l_name === "") {
            setMessage("Add your first name and last name ❌")
            setLoading(false);
        }
        else{
            try {
                const res = await AxiosInstance.post(
                    "complete_registration",
                    formData,
                    {
                        headers: {
                            "content-type": "application/json",
                        }
                    }
                );
                setMessage(res.data.message || "Registration successful ✅");
                localStorage.setItem("account_complete", "true")
            } catch (err) {
                setMessage(err.response?.data?.error || "Something went wrong ❌");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
                {loading ? (
                        <div className="flex justify-center items-center h-40">
                            <div className="w-10 h-10 border-4 border-ashesi-red border-t-transparent rounded-full animate-spin"></div>
                        </div>
                ) : (
                    <div>
                        <h1 className="mb-6 text-center text-2xl font-bold">{purpose==="setup" ? 'Complete Registration' : 'Update Details'}</h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="f_name"
                                placeholder="First Name"
                                value={formData.f_name}
                                onChange={handleChange}
                                className="w-full rounded border p-2"
                                required
                            />

                            <input
                                type="text"
                                name="l_name"
                                placeholder="Last Name"
                                value={formData.l_name}
                                onChange={handleChange}
                                className="w-full rounded border p-2"
                                required
                            />

                            {
                                message === "Registration successful ✅" ? (
                                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                                    <a href="/datasets" className="rounded-md hover:opacity-80 active:scale-95 bg-blue-600 !text-center decoration-ashesi-red h-10 w-full text-white flex justify-center items-center gap-2 px-4 py-2 font-semibold transition duration-300 ease-in-out">
                                        Continue to Datasets
                                    </a>
                                ) : (
                                    <CustomButton
                                        text="Submit"
                                        textColor="text-white"
                                        width="w-full"
                                        height="h-10"
                                        className="!text-center decoration-ashesi-red"
                                        disabled={loading}
                                        onClick={handleSubmit}
                                    />
                                )
                            }

                        </form>

                        {message && (
                            <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
