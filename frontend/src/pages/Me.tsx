import { useEffect } from "react"
import { useNavigate } from "react-router-dom";


export function Me (){
    const navigate=useNavigate();
    useEffect(()=>{
        if (localStorage.getItem('token')!=="undefined"){
         navigate('/blog')
        } 
        else{
            navigate('/Signup')
        }
    },[])

    return <>
    </>
}