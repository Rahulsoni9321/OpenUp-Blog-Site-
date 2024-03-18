import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../Context/Authuser";
import { AppBar } from "./AppBar";
import { BlogSkeleton } from "./BlogSkeleton"
import { PostCard } from "./PostCard"

export const Userprofilesection = ()=>{
    const navigate=useNavigate();
    const { userdetails, detailsloading } = UseUserContext();

    if (detailsloading || !userdetails){
         
        return <div className="w-full">
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
        </div>
    }
    return <div className="flex flex-col">
        <AppBar title="Write"></AppBar>
    <div className="flex justify-center  w-full h-screen overflow-y-auto p-8 ">
        <div className="w-11/12 md:w-9/12 ">
            <div className="UserProfile md:flex md:flex-row items-center md:justify-center flex flex-col  gap-5 md:gap-7 my-12">
                 <div className="profilepic w-12 h-12 bg-gray-200  rounded-full flex justify-center items-center ">
                 <div className="text-2xl text-black/70">

                     {userdetails.FirstName[0]}
                 </div>
                 </div>
                 <div className="flex flex-col gap-4 items-center md:items-start">
                 <div className="Username dark:text-gray-300 font-semibold text-3xl ">
                       {userdetails.FirstName} {userdetails.LastName}
                 </div>
                 <div className="Userbio text-gray-200 opacity-65 text-md font-light md:w-11/12">
                       {userdetails.Bio} Software engineer, blogger, and an explorer.✨
                 </div>
                 </div>
            </div>
            <div className="text-2xl md:text-4xl opacity-80 text-gray-100 font-medium">
                My Post
            </div>
            <div>
               {
                userdetails.Blog && userdetails.Blog.length>0 ? (
                userdetails.Blog.map((blog)=>{
                     return <PostCard title={blog.Title} content={blog.Content} publisheddate="22nd October 2023" blogid={blog.id} ></PostCard> 
                })):
                <div className="text-4xl font-semibold text-center text-gray-650">Nothing to show here. <span className="cursor-pointer text-cyan-200" onClick={()=>navigate('/Blog/Create')}>Write?</span></div>
               } 
            </div>
        </div>
    </div>
    </div>
}