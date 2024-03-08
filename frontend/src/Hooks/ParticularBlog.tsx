import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";


interface Blog{
    "Content": string,
    "Title": string,
    "id": number,
    "Author": {
        "FirstName": string,
        "LastName": string
    }
}

export const useBlog=({id}:{id:string})=>{
    const [loading,setloading]=useState(false);
    const [blog,setblog]=useState<Blog>();

    useEffect(() => {
        
          setloading(true);
          axios.get(`${BACKEND_URL}/blog/${id}`,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }
          }).then((response)=>{

              setloading(false);
              console.log("hiii")
              setblog(response.data.Blog);
          })
       
      }, [id]);

    return {blog,loading}
}