import { useParams } from "react-router-dom";
import { AppBar } from "../Component/AppBar";
import { UserParticularPost } from "../Component/UserParticularPost";
import { useBlog } from "../Hooks/ParticularBlog";
import { BlogSkeleton } from "../Component/BlogSkeleton";
import { UserContextProvider } from "../Context/Authuser";

export function UserBlog() {
    
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
        </>
    }
    
     
    return <UserContextProvider>
    <div className="h-screen dark:bg-gradient-to-r dark:from-[#000000]/90  dark:to-slate-600/90 overflow-y-auto flex flex-col gap-8">
      <div>

    <AppBar title="Write"></AppBar>
      </div>
    <UserParticularPost Blog={blog}></UserParticularPost>
    </div>
    </UserContextProvider> 
}
