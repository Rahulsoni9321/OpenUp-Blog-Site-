import { useEffect, useState } from "react"

export const Userprofile=() =>{

   const [loading,setloading]=useState(false);
   const [userdetails,setuserdetails]=useState("")

   useEffect(()=>{
    async function getuserdetail() {
        setloading(true)
        const response=await axios.get()
 
        setloading(false)
    }
    getuserdetail();
   },[])

    return {loading,userdetails}
}