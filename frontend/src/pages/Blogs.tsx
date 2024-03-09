import { BlogCard } from "../Component/BlogCard";
import { AppBar } from "../Component/AppBar";
import { UseBlogs } from "../Hooks/useBlogs";
import { BlogSkeleton } from "../Component/BlogSkeleton";
import { Link } from "react-router-dom";

export const AllBlogs = () => {
  const { loading, Allblog } = UseBlogs();

  if (loading) {
    return (
      <div className="w-full">
        <div className="  bg-white-300 rounded-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <AppBar title="New Blog"></AppBar>
        </div>

        <BlogSkeleton></BlogSkeleton>
        <BlogSkeleton></BlogSkeleton>
        <BlogSkeleton></BlogSkeleton>
      </div>
    );
  }

  return (
    <>
        <div className="  bg-white-300 rounded-md bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <AppBar title="New Blog"></AppBar>
        </div>
      

      <div className="m-10 ml-20 ">
        {Allblog && Allblog.length > 0 ? (
          Allblog.map((blog) => {
            return (
              <>
                {" "}
                <div className="w-10/12 cursor-pointer hover:shadow-xl rounded-sm hover:bg-slate-200">
                  <BlogCard
                    id={blog.id}
                    AuthorFirstName={blog.Author.FirstName}
                    AuthorLastName={blog.Author.LastName}
                    Title={blog.Title}
                    Content={blog.Content}
                    PublishedDate="20-12-2023"
                  ></BlogCard>
                </div>
              </>
            );
          })
        ) : (
          <div className="w-full flex justify-center items-center text-3xl font-semibold text-black">No Blogs to show.  <Link className="underline underline-offset-1 text-cyan-500 hover:text-gray-700" to={'/Blog/Create'}> Create One?</Link></div>
        )}
      </div>
    </>
  );
};
