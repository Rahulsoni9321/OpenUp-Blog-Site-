import { useEffect, useState } from "react";
import { Auth } from "../Component/Auth";
import { Quote } from "../Component/Quote";

export function Signup() {
    const [loader,setloader]=useState(true);
  
    useEffect(()=>{
       setTimeout(() => {
        setloader(false)
       }, 300);
  
      }
    ,[])
       if (loader){
        return  < div className="dark:bg-gradient-to-r dark:from-[#000000]/90  dark:to-slate-600/90 flex justify-center items-center h-screen">
         <div className="flex justify-center  items-center gap-3">
         <span className="loading loading-bars loading-lg"></span>
                        <p className="text-lg font-medium">Loading...</p>
                      </div>
  
       </div>
       } 
    return <>
    <div className="grid grid-cols-2 overflow-y-auto">
        <div className="col-span-2 md:col-span-1">

        <Auth authtype="signup"></Auth>
        </div>
     <div className="hidden md:block overflow-auto">  
        <Quote></Quote>
        </div>
    </div>
    </>
}


