import { AppBar } from "./AppBar";

import { typeBlog } from "../Hooks/useBlogs";

export const ParticularBlog = ({ Blog }: { Blog: typeBlog }) => {
  return (
    <>
      <div className="font-sans w-full">
        <div className="">
          <AppBar title="Write"></AppBar>
        </div>
        <div className="flex justify-between p-10 md:py-20 gap-3 w-full">
          <div className="Blog md:border-r md:border-black dark:md:border-white w-11/12  md:w-4/5">
            <div className="md:px-6">
              <div className="text-3xl md:text-5xl w-11/12 dark:text-gray-100 text-black font-extrabold ">
                {Blog.Title}
              </div>
              <div className="flex gap-2 items-center text-xs md:text-sm text-gray-700 dark:text-gray-400 font-normal mt-8 mb-10">
                Posted on August 22,2023{" "} <span className="px-0.5">·</span>
                <div className="text-xs bg-gray-300 text-gray-700 p-1 rounded-md font-normal line-clamp-1">
                  {Math.ceil(Blog.Content.length / 400)} minutes read
                </div>
              </div>
              <div className="text-sm w-full tracking-wide text-black dark:text-gray-300 font-normal  text-opacity-90" dangerouslySetInnerHTML={{__html:Blog.Content}}>
                
              </div>
            </div>
          </div>
          <div className="author hidden md:block  w-1/5">
            <div>
              <div className="text-md font-normal text-gray-700 dark:text-gray-200 mb-4">
                Author
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <div className="w-7 h-7 bg-gray-200 dark:text-black rounded-full flex justify-center items-center"><div>{Blog.Author.FirstName[0]}</div></div>
                </div>
                <div>
                  <div className="text-md lg:text-lg dark:text-gray-300 text-black font-semibold mb-2">
                    {Blog.Author.FirstName} {Blog.Author.LastName}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-200 font-normal opacity-65">
                    {Blog.Author.Bio ? Blog.Author.Bio :  "Software engineer, blogger, and an explorer.✨" } 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
