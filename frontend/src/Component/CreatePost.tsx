import axios from "axios";
import { ChangeEvent, useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { AppBar } from "./AppBar";

export const CreatePost = () => {
    const navigate = useNavigate();
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");

    const PostBlog=async () => {
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
        navigate(`/Blog/${response.data.Blog.id}`);
    }

    return (
        <>
          
            <div className="flex justify-center pt-12 font-serif">
                <div className="">
                    <input
                        onChange={(e) => {
                            settitle(e.target.value);
                        }}
                        type="text"
                        className="outline-none border-none text-6xl text-black placeholder-gray-500 placeholder-opacity-50 my-4"
                        placeholder="Title"
                    ></input>
                    <div>
                        <TextEditor
                            onChange={(e) => {
                                setcontent(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        onClick={PostBlog}
                        className="bg-green-600 text-white px-4 my-10 w-24 rounded-xl h-8"
                    >
                        Publish
                    </button>
                </div>
            </div>
        </>
    );
};

// Define or import the TextEditor component
function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <textarea
            onChange={onChange}
            className="text-lg overflow-auto text-gray-800 w-full h-lvh outline-none"
            placeholder="Tell your story....."
        ></textarea>
    );
}


