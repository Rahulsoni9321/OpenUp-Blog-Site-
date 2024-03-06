import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blog{
        "Content": string,
        "Title": string,
        "id": number,
        "Author": {
            "FirstName": string,
            "LastName": string
        }
    }


export const UseBlogs=()=>{
    const [Allblog, setAllblog] = useState<Blog[]>([]);
    const [loading, setloading] = useState(false);
  
    
  
    useEffect(() => {
      async function Allblog() {
        setloading(true);
        const response = await axios.get(`${BACKEND_URL}/blog/bulk`,{
          headers:{
              "Authorization":`Bearer ${localStorage.getItem('token')}`
          }
        });
        setloading(false);
        setAllblog(response.data.AllBlogs);
      }
      Allblog();
    }, []);

    return {loading,Allblog};
}