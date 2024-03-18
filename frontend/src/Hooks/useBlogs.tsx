import { useEffect, useState } from "react";
// import { BACKEND_URL } from "../config";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface typeBlog{
        "Content": string,
        "Title": string,
        "id": number,
        "Author": {
            "FirstName": string,
            "LastName": string
        }
    }


export const UseBlogs=()=>{
    const [Allblog, setAllblog] = useState<typeBlog[]>([]);
    const [loading, setloading] = useState(false);
    const [Allbloglength,setAllbloglength]=useState(0);

    
    
    useEffect(() => {
      async function Allblog() {

        setloading(true);
        const response = await axios.get(`${BACKEND_URL}/blog/bulk`,{
          headers:{
              "Authorization":`Bearer ${localStorage.getItem('token')}`
          }
        });
        setAllblog(response.data.AllBlogs);
        setAllbloglength(response.data.Bloglength)
        setloading(false);
      }
      Allblog();
    }, []);




    return {Allblog,setAllblog,loading,Allbloglength};
}