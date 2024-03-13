import { AppBar } from "./AppBar";

import { typeBlog } from "../Hooks/useBlogs";

export const ParticularBlog = ({ Blog }: { Blog: typeBlog }) => {
  return (
    <>
      <div className="font-sans w-full">
        <div className="rounded-md bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <AppBar title="New Blog"></AppBar>
        </div>
        <div className="flex justify-between p-10 md:p-20 gap-3 w-full">
          <div className="Blog md:border-r md:border-black w-11/12  md:w-3/4">
            <div className="md:px-6">
              <div className="text-3xl md:text-5xl w-11/12  text-black font-extrabold ">
                {Blog.Title}
              </div>
              <div className="flex gap-2 items-center text-xs md:text-sm text-gray-700 font-normal mt-5 mb-6">
                Posted on August 22,2023{" "} <span className="px-0.5">·</span>
                <div className="text-xs bg-gray-300 text-gray-700 p-1 rounded-md font-normal line-clamp-1">
                  {Math.ceil(Blog.Content.length / 400)} minutes read
                </div>
              </div>
              <div className="text-sm w-full text-black font-medium  text-opacity-90" dangerouslySetInnerHTML={{__html:Blog.Content}}>
                
              </div>
            </div>
          </div>
          <div className="author hidden md:block  w-2/6">
            <div>
              <div className="text-md font-normal text-gray-700 mb-4">
                Author
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center"><div>{Blog.Author.FirstName[0]}</div></div>
                </div>
                <div>
                  <div className="text-xl text-black font-extrabold mb-2">
                    {Blog.Author.FirstName}
                  </div>
                  <div className="text-sm text-gray-500 font-normal">
                    This is a dummy anything is the best of the west is the{" "}
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
