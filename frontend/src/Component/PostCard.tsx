import { Link } from "react-router-dom"

export const PostCard=({title,content,publisheddate,blogid}:{title:string,content:string,publisheddate:string,blogid:number})=>{
    return <Link to={`/blog/${blogid}`}> <div className="p-6 px-8 bg-gradient-to-r from-slate-600 to-white/20 mt-6 hover:bg-slate-600 rounded-xl transform transition duration-200 hover:scale-110 ">
        <div className="line-clamp-3">
        <div className="text-3xl font-medium text-gray-100 line-clamp-1 w-10/12 ">{title}</div>
        <div className="my-2 text-xs font-normal text-gray-200 opacity-50">{publisheddate}</div>
        <div className="line-clam-2 text-sm text-gray-200 font-normal" dangerouslySetInnerHTML={{__html:content}}></div>
        </div>
    </div>
    </Link>
}