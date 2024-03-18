import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { typeBlog } from "./useBlogs";

export const useLimitedBlogs=()=>{
    const [limitedblog,setlimitedblog]=useState<typeBlog[]>();
    const [loading,setloading]=useState(false);
    useEffect(()=>{
      setloading(true)
      async function FetchBlogs(){
        const res=await axios.get(`${BACKEND_URL}/explore`)
        setlimitedblog(res.data.AllBlogs)
        setloading(false)
      }
      FetchBlogs()
    },[])

    return {loading,limitedblog};
}