import { BlogSkeleton } from "../Component/BlogSkeleton";
import { useBlog } from "../Hooks/ParticularBlog"
import { ParticularBlog } from "../Component/ParticularBlog";
import { useParams } from "react-router-dom";
import { AppBar } from "../Component/AppBar";
import { UserContextProvider } from "../Context/Authuser";

export function Blog() {
    const {id}=useParams();
    const {loading,blog}=useBlog({id:id || ""});
    
    if (loading || !blog){
        return <>
        <div className=" ">
          <AppBar title="New Blog"></AppBar>
        </div>
      
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        </>
    }
    
     
    return <UserContextProvider>
    <div className="dark:bg-gradient-to-r dark:from-[#000000]/90  dark:to-slate-600/90 h-screen overflow-y-auto">
       <ParticularBlog  Blog={blog}  ></ParticularBlog>
    </div>
    </UserContextProvider> 
}