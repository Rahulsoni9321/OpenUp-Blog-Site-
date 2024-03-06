import { typeBlogInput } from "@index.developers/common";
import { BlogCard } from "../Component/BlogCard";
import { AppBar } from "../Component/AppBar";
import { UseBlogs } from "../Hooks/useBlogs";
import { BlogSkeleton } from "../Component/BlogSkeleton";

export const AllBlogs = () => {
  const { loading, Allblog } = UseBlogs();

  if (loading) {
    return (
      <div className="w-full">
        <div className="  w-full bg-white-300 rounded-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <AppBar></AppBar>
        </div>

        <BlogSkeleton></BlogSkeleton>
        <BlogSkeleton></BlogSkeleton>
        <BlogSkeleton></BlogSkeleton>
      </div>
    );
  }

  return (
    <>
      <div className="  w-full bg-white-300 rounded-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
        <AppBar></AppBar>
      </div>

      <div className="m-10 ml-20 ">
        {Allblog && Allblog.length > 0 ? (
          Allblog.map((blog) => {
            return (
              <>
                {" "}
                <div className="w-9/12 cursor-pointer hover:shadow-xl">
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
          <div>No Blogs to show Create One?</div>
        )}
      </div>
    </>
  );
};
