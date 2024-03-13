import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useState } from "react";
import { UseBlogs } from "../Hooks/useBlogs";
import { BlogSkeleton } from "./BlogSkeleton";
import { BlogCard } from "./BlogCard";
import { BACKEND_URL } from "../config";



export function InfiniteScrollcomponent() {
    const { Allblog,setAllblog, Allbloglength,loading } = UseBlogs();
    const [page,setpage]=useState(2)
  
    if (loading) {
      return (
        <div className="w-full">
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
        </div>
      );  
    }
  
    async function FetchData  () {
      const response = await axios.get(`${BACKEND_URL}/blog/bulk?page=${page}`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('token')}`
        }
  
      });
      setpage(page+1);
      setAllblog([...Allblog,...response.data.AllBlogs]);
      
    }
  
    return (
      <>
        <div className="infinte-scroll overflow-y-scroll  m-10 ml-20 ">
          <InfiniteScroll
            className=""
            next={FetchData}
            hasMore={Allblog.length < Allbloglength}
            dataLength={Allblog.length + 2}
            loader={
              <div className="flex justify-center  h-10 mt-8 gap-3 w-full items-center">
                <div
                  className="animate-spin  inline-block w-7 h-7  border-[3px] border-current border-t-transparent text-black rounded-full "
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
                <p>Loading.....</p>
              </div>
            }
            endMessage={
              <div className="text-center  text-lg font-semibold mt-6">
                Wow..!! You've reached the end...👏
              </div>
            }
          >
            {Allblog && Allblog.length > 0 ? (
              Allblog.map((blog) => {
                return (
                  <>
                    {" "}
                    <div className="w-11/12 md:w-10/12 infinite-scroll  cursor-pointer hover:shadow-xl rounded-sm hover:bg-slate-200">
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
              <div className="w-full flex justify-center items-center mt-8 text-3xl font-semibold text-black">
                No Blogs to show.{" "}
                <Link
                  className="underline ml-2 underline-offset-1 text-cyan-500 hover:text-gray-700"
                  to={"/Blog/Create"}
                >
                  {" "}
                  Create One?
                </Link>
              </div>
            )}
          </InfiniteScroll>
        </div>
      </>
    );
  }
  