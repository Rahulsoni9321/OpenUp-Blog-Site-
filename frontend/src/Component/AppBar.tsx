import { IoIosNotificationsOutline } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { Link,  useNavigate } from "react-router-dom";

export function AppBar({title}:{title:string}) {
    const navigate=useNavigate();
    return <>
    <div className="w-full flex justify-between items-center h-20 shadow-md">
    <Link to={'/blog'}> <div className="flex justify-between items-center pl-14 gap-3 cursor-pointer">
        <img className="w-16 h-10" src="/medium-logo-F0ACFCCD58-seeklogo.com.png"/>
        <div className="text-xl font-semibold">Medium</div>
        
     </div></Link>
     <div className="flex justify-between items-center pr-12 gap-5">
        <button onClick={()=>{
            navigate('/blog/Create')
        }}className="w-20  p-2 rounded-2xl text-xs bg-black hover:bg-slate-800 text-white font-normal" >
            {title}
        </button>
        <div >
         <BsThreeDots className="w-10 h-6 "></BsThreeDots>
        </div>
        <div >
        <IoIosNotificationsOutline className="w-8 h-6 "/>
        </div>
        <div className="w-9 h-9 rounded-full bg-black">

        </div>

     </div>
    </div>
    </>
}