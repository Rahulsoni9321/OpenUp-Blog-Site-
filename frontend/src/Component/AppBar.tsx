import { IoIosNotificationsOutline } from "react-icons/io";
import { Link,  useNavigate } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

export function AppBar({title}:{title:string}) {
    const navigate=useNavigate();
    return <>
    <div className="w-full flex justify-between items-center h-20 shadow-md font-sans">
    <Link to={'/blog'}> <div className="flex justify-between items-center pl-10 md:pl-14 gap-3 cursor-pointer">
        <img className="md:w-16 w-12 h-7 md:h-10" src="/medium-logo-F0ACFCCD58-seeklogo.com.png"/>
        <div className="text-xl font-semibold hidden md:block">OpenUp</div>
        
     </div></Link>
     <div className="flex justify-between items-center pr-4 md:pr-12 gap-2 md:gap-5">
       {title==="Write" ?<div onClick={()=>{
            navigate('/blog/Create')
        }}className="flex justify-center items-center cursor-pointer gap-2 font-normal text-black text-md text-white md:font-normal" >
            <TfiWrite className="text-black shadow-lg w-5 h-5"/> 
            <p className="text-black font-serif hidden md:block">{title}</p>
        </div>:<div></div> }
        
       
        <div >
        <IoIosNotificationsOutline className="md:w-8 md:h-6 w-6 h-4 "/>
        </div>
        <div className="md:w-9 md:h-9 w-6 h-6 rounded-full bg-black">

        </div>

     </div>
    </div>
    </>
}