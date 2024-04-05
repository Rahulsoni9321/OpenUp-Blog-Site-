import { Link } from "react-router-dom";
import { useLimitedBlogs } from "../Hooks/useLimitedBlogs"
import { BlogCard } from "./BlogCard";
import { BlogSkeleton } from "./BlogSkeleton";

export const LimitedBlogs=()=>{
    const {loading,limitedblog} = useLimitedBlogs();
    if (loading){
       return  <div className="w-full ">
        <BlogSkeleton></BlogSkeleton>
        <BlogSkeleton></BlogSkeleton>
        <BlogSkeleton></BlogSkeleton>
      </div>  
    } 
    return <>
      {limitedblog && limitedblog.length > 0 ? (
              limitedblog.map((blog) => {
                return (
                  <>
                    {" "}
                    <div className="w-11/12 md:w-10/12 cursor-pointer hover:shadow-xl rounded-sm dark:hover:bg-slate-800 hover:bg-slate-200">
                      <BlogCard
                        id={blog.id}
                        AuthorFirstName={blog.Author.FirstName}
                        AuthorLastName={blog.Author.LastName}
                        Title={blog.Title}
                        Content={blog.Content}
                        PublishedDate={blog.Time}
                      ></BlogCard>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="w-full flex justify-center items-center mt-6 md:mt-8 text-xl md:text-3xl font-semibold text-black">
                No Blogs to show.{" "}
                <Link
                  className="underline ml-2 underline-offset-1 text-cyan-500 hover:text-gray-700"
                  to={"/signin"}
                >
                  {" "}
                  Create One?
                </Link>
              </div>)
              }
              <div className="flex items-center justify-center w-full h-24">Want to Explore more?&nbsp;  <Link to={'/signin'}><span className="dark:text-white text-cyan-600"> Signin</span></Link></div>
    </>
}

