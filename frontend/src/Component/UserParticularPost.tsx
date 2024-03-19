import { AiOutlineDelete } from "react-icons/ai";
import { typeBlog } from "../Hooks/useBlogs";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import axios from "axios";
import { BACKEND_URL } from "../config";
import toast from "react-hot-toast";

export const UserParticularPost = ({ Blog }: { Blog: typeBlog }) => {
  return (
    <div className="font-sans w-full flex-grow flex justify-center pb-8 ">
      <div className="w-11/12  md:w-10/12 pt-12 ">
        <div className="md:px-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl md:text-5xl w-10/12 md:w-10/12 dark:text-gray-100 text-black font-extrabold ">
              {Blog.Title}
            </div>
            <BlogChange blogid={Blog.id}></BlogChange>
          </div>
          <div className="flex gap-2 items-center text-xs md:text-sm text-gray-700 dark:text-gray-400 font-normal my-12">
            Posted on August 22,2023 <span className="px-0.5">·</span>
            <div className="text-xs bg-gray-300 text-gray-700 p-1 rounded-md font-normal line-clamp-1">
              {Math.ceil(Blog.Content.length / 400)} minutes read
            </div>
          </div>
          <div
            className="text-sm w-full text-black dark:text-gray-300 font-medium  text-opacity-90"
            dangerouslySetInnerHTML={{ __html: Blog.Content }}
          ></div>
        </div>
      </div>
    </div>
  );
};


function BlogChange({ blogid }: { blogid: number }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    if (modal){
      modal.showModal();
    }
  };

  const handledeleteevent = async () => {
    toast.loading('Deleting blog...',{
      duration:2000
    })
    try {
      const response = await axios.delete(`${BACKEND_URL}/blog`, {
        data: {
          id:blogid,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success(response.data.message,{
        duration:4000
      });
      navigate(-1);
    } catch (error) {
      toast.error("Something went wrong while deleting the blog.");
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <div className="dropdown  dropdown-end">
        <BsThreeDots
          tabIndex={0}
          className="text-white w-6 h-6 md:w-12 md:h-12 mr-3 md:mr-2 cursor-pointer hover:text-gray-400"
        ></BsThreeDots>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-24 md:w-44   bg-black/40 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 "
        >
          <li>
            <div
              onClick={() => {}}
              className=" text-md hover:backdrop-filter  hover:bg-opacity-30 md:flex md:justify-around"
            >
              <div>Update</div>
              <GrUpdate className="hidden md:block"></GrUpdate>
            </div>
          </li>

          <li>
            <div
              onClick={handleButtonClick}
              className="text-red-500 text-md hover:backdrop-filter  hover:bg-opacity-30 md:flex md:justify-around"
            >
              <div>Delete</div>
              <AiOutlineDelete className="w-5 h-5 hidden md:block"></AiOutlineDelete>
            </div>

            <dialog
              id="my_modal_2"
              className="modal w-full flex justify-center items-center  bg-black rounded-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25"
            >
              <div className="modal-box w-1/3 text-center bg-black/50   bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 ">
                <h3 className="font-bold  text-gray-200 text-md md:text-3xl">
                  Are you sure you want to delete this post?
                </h3>
                <br></br>
                <p className="text-red-500 text-sm font-normal">
                  The action is irreversible and will result in permanent loss
                  of data.
                </p>
                <br></br>
                <div className="modal-action">
                  <form method="dialog" className="w-full">
                    <button
                      className="btn bg-gray-300 w-5/12 text-red-500 mr-2 hover:rounded-none hover:bg-gray-100 border-none rounded-full outline-none"
                      onClick={handledeleteevent}
                    >
                      Yes
                    </button>
                    <button className="btn w-5/12 ml-2 bg-gray-900 text-gray-100 hover:rounded-none border-none rounded-full outline-none">
                      No
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
        </ul>
      </div>
    </>
  );
}
