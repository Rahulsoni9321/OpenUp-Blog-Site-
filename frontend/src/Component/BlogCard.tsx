import { Link } from "react-router-dom";

interface BlogCardProp {
    AuthorFirstName: string;
    AuthorLastName: string;
    Title: string;
    Content: string;
    PublishedDate: string;
    id:number
  }
  
  
  export function BlogCard({ AuthorFirstName,AuthorLastName, Title, Content, PublishedDate,id }: BlogCardProp) {
    return (
      <>
      <Link to={`/blog/${id}`}>
        <div  className="w-full md:w-5/6 h-56 font-sans p-6 border-b border-gray-500 hover:border-none relative">
          <div className="flex items-center gap-2 text-sm text-black font-normal pb-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-center">{AuthorFirstName[0]}</div>
            <p className="">
              {AuthorFirstName} {AuthorLastName} <span className="px-1">·</span>
            </p>
            <p className=" text-zinc-400">{PublishedDate}</p>
          </div>
          <div className="line-clamp-4 ">
          <div className="text-3xl mb-0.5 text-black font-bold w-11/12">{Title}</div>
          <div className="text-sm text-zinc-800 pt-0.5 ">{Content}</div>
          </div>
          <div className="text-xs bg-gray-300 w-22 text-center mt-2 absolute  bottom-2 text-gray-700 px-1 py-0.5 rounded-md font-normal hidden md:block">
                  {Math.ceil(Content.length / 400)} minutes read
                </div>       </div>
        </Link>
      </>
    );
  }
  