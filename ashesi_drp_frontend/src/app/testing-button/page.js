"use client"; 

import CustomButton from "@/components/CustomButton";
import "../globals.css";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h2 className="text-2xl font-bold">Custom Button Component</h2>
      
      
      <CustomButton text="Go Home" href="/" />
      
      <CustomButton text="Click Me" onClick={() => alert("Button Clicked!")} />
      
      {/* Using diffent parameters */}
      <CustomButton 
        text="Primary Button" 
        bgColor="bg-blue-600" 
        textColor="text-white" 
        width="w-48" 
        height="h-14" 
        borderRadius="rounded-lg"
        onClick={() => alert("Primary button clicked!")}
      />
      
      
      {/* Using diffent parameters */}
      <CustomButton 
        text="Success Button" 
        bgColor="bg-black" 
        textColor="text-white" 
        width="w-40" 
        height="h-12" 
        borderRadius="rounded-full"
      />
      
    </div>
  );
}
