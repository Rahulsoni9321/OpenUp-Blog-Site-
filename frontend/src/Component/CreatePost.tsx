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
        toast.error("Something went Wrong while Publishing. Please try again." || error )
    }
}
    }

    return (
        <>
          
            <div className="flex justify-center pt-12 px-20 font-serif">
                <div className="w-10/12">
                    <input
                        onChange={(e) => {
                            settitle(e.target.value);
                        }}
                        type="text"
                        className="w-10/12 outline-none border-none text-6xl text-black placeholder-gray-500 placeholder-opacity-50 my-4"
                        placeholder="Title"
                    ></input>
                    <div className="w-full">
                        <TextEditor content={content} setcontent={setcontent} />
                    </div>
                    <button
                        onClick={PostBlog}
                        className="bg-black text-white px-4 my-10 w-28 rounded-2xl h-8"
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
                      <p className="text-sm font-normal">Publishing...</p>
                    </div>
                  ) : (
                   <p>{"Publish"}</p>  
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
        <ReactQuill theme="snow" value={content} onChange={setcontent} placeholder="Tell your story....." className="text-lg overflow-auto text-gray-800 w-11/12 h-lvh  placeholder-opacity-20"/>

        
        </>
        );
}


