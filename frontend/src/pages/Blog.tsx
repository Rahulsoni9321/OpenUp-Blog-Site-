import { BlogSkeleton } from "../Component/BlogSkeleton";
import { useBlog } from "../Hooks/ParticularBlog"
import { ParticularBlog } from "../Component/ParticularBlog";
import { useParams } from "react-router-dom";
import { AppBar } from "../Component/AppBar";

export function Blog() {
    const {id}=useParams();
    const {loading,blog}=useBlog({id:id || ""});
    
    if (loading || !blog){
        return <>
        <div className="  bg-white-300 rounded-md bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <AppBar title="New Blog"></AppBar>
        </div>
      
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        </>
    }
    
    return <>
       <ParticularBlog  Blog={blog}  ></ParticularBlog>
    </>
}