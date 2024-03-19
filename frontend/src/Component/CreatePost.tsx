import axios from "axios";
import {  useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export const CreatePost = () => {
    const navigate = useNavigate();
    const [title, settitle] = useState("");
    const [tracker, settracker] = useState(false);
    const [content, setcontent] = useState("");


    const PostBlog=async () => {
        if (title.trim()==="" || content.trim()===""){
              toast.error("Cannot Publish Empty Blogs")
              settracker(false)
              return 
        }
   try  
   {
    settracker(true)
    const response = await axios.post(
        `${BACKEND_URL}/blog`,
        {
            Title: title,
            Content: content,
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "token"
                )}`,
            },
        }
    );
    settracker(false)
    toast.success("Blog Published Successfully.")
    setTimeout(() => {
        navigate(`/Blog/${response.data.Blog.id}`);
        
    }, 400);

}
catch (error){
    if (error){
        toast.error("Something went Wrong while Publishing. Please try again." || error )
    }
    else {
        toast.error("Something went Wrong while Publishing. Please try again." )
    }
}
    }

    return (
        <>
          
            <div className="flex justify-center pt-12  px-6 md:px-20 font-serif">
                <div className="w-11/12 md:w-10/12">
                    <input
                        onChange={(e) => {
                            settitle(e.target.value);
                        }}
                        type="text"
                        className="w-11/12 outline-none bg-gray-800/5  border-none text-5xl md:text-6xl dark:text-gray-200 text-black placeholder-gray-500 dark:placeholder-gray-100 dark:placeholder-opacity-55 placeholder-opacity-50 my-4"
                        placeholder="Title"
                    ></input>
                    <div className="w-full">
                        <TextEditor content={content} setcontent={setcontent} />
                    </div>
                    <button
                        onClick={PostBlog}
                        className="bg-black/80 transform hover:scale-110 text-white px-5 py-2 my-10 rounded-3xl hover:bg-black "
                    >
                       {tracker ? (
                  <div className="flex justify-center  items-center">
                  <div
                    className="animate-spin inline-block w-5 h-5 mr-4 border-[3px] border-current border-t-transparent text-white rounded-full "
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <p>Publishing...</p>
                </div>
                  ) : (
                   <p className="text-sm font-normal">{"Publish"}</p>  
                  )}
                    </button>
                </div>
            </div>
        </>
    );
};

// Define or import the TextEditor component
function TextEditor({content,setcontent}:{
    content:string,
    setcontent:React.Dispatch<React.SetStateAction<string>>
}) {

    return (<>
        <ReactQuill theme="snow" value={content} onChange={setcontent}  placeholder="Tell your story....." className="text-xl overflow-y-auto dark:text-gray-100 text-gray-800  w-full md:w-11/12 h-lvh "/>

        
        </>
        );
}


