import { IoIosNotificationsOutline } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { Link,  useNavigate } from "react-router-dom";

export function AppBar({title}:{title:string}) {
    const navigate=useNavigate();
    return <>
    <div className="w-full flex justify-between items-center h-20 shadow-md">
    <Link to={'/blog'}> <div className="flex justify-between items-center pl-10 md:pl-14 gap-3 cursor-pointer">
        <img className="md:w-16 w-12 h-7 md:h-10" src="/medium-logo-F0ACFCCD58-seeklogo.com.png"/>
        <div className="text-xl font-semibold hidden md:block">Medium</div>
        
     </div></Link>
     <div className="flex justify-between items-center pr-4 md:pr-12 gap-2 md:gap-5">
        <button onClick={()=>{
            navigate('/blog/Create')
        }}className="md:w-20 w-16 font-thin  p-1 px-1.5 md:p-2 rounded-2xl text-xs bg-black hover:bg-slate-800 text-white md:font-normal" >
            {title}
        </button>
        <div >
         <BsThreeDots className="md:w-10 md:h-6 w-7 h-5"></BsThreeDots>
        </div>
        <div >
        <IoIosNotificationsOutline className="md:w-8 md:h-6 w-6 h-4 "/>
        </div>
        <div className="md:w-9 md:h-9 w-6 h-6 rounded-full bg-black">

        </div>

     </div>
    </div>
    </>
}