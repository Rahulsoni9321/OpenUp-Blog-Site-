import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { typeSignupInput } from "@index.developers/common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import {toast} from "react-hot-toast"
import { useAuth } from "../Context/useAuth";

export const Auth = ({ authtype }: { authtype: "signin" | "signup" }) => {
  const {login}=useAuth();
  const navigate = useNavigate();
  const [message,setmessage]=useState("")
  const [tracker,settracker]=useState(false)
  const [postInputs, setpostInputs] = useState<typeSignupInput>({
    Email: "",
    FirstName: "",
    LastName: "",
    Password: "",
  });

  const SendRequest = async (): Promise<void> => {
    try {
      settracker(true)
      const response = await axios.post(
        `${BACKEND_URL}/user/${authtype === "signup" ? "signup" : "signin"}`,
        postInputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const jwt = response.data.token;
      
      {authtype==="signin"?toast.success("Signed In successfully"):toast.success("Signed Up successfully")};
      settracker(false)
      login(jwt);
      navigate("/Blog");
    } catch (error: any) {
        if (error && error.response && error.response.data) {
          settracker(false)
          setmessage(error.response.data.message)
      toast.error(error.response.data.message);
        }
    else {
      settracker(false)
        toast.error("Something went wrong. Please try again.")
    }
    setTimeout(() => {
        setmessage("")
    }, 3000);
}
  };
  return (
    <>
      <div className="flex justify-center h-screen items-center font-sans bg-gradient-to-tr from-gray-950 via-gray-700 to-gray-400">
        <div className="w-3/4 px-8">
          <div className=" mb-2 text-center">
            <div className="text-xl xs:text-2xl md:text-4xl text-black dark:text-gray-200 font-bold">
              {authtype === "signin" ? "Sign In" : "Create an account"}
            </div>
          </div>
          <div className="text-sm flex justify-center  dark:text-gray-300 text-gray-500">
            <div className="  font-normal">
              {authtype == "signin"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <Link
                className="underline underline-offset-1"
                to={authtype === "signin" ? "/Signup" : "/Signin"}
              >
                {" "}
                {authtype === "signin" ? "Signup" : "Signin"}
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <LabelledInput
              authtype={authtype}
              label="Email"
              placeholder="Enter your email..."
              onChange={(e) => {
                setpostInputs({ ...postInputs, Email: e.target.value });
              }}
            ></LabelledInput>
            <LabelledInput
              authtype={authtype}
              label="First Name"
              placeholder="Enter your firstname..."
              onChange={(e) => {
                setpostInputs({ ...postInputs, FirstName: e.target.value });
              }}
            ></LabelledInput>
            <LabelledInput
              authtype={authtype}
              label="Last Name"
              placeholder="Enter your lastname..."
              onChange={(e) => {
                setpostInputs({ ...postInputs, LastName: e.target.value });
              }}
            ></LabelledInput>
            <LabelledInput
              label="Password"
              placeholder="Enter your password...."
              type="password"
              authtype={authtype}
              onChange={(e) => {
                setpostInputs({ ...postInputs, Password: e.target.value });
              }}
            ></LabelledInput>
            <p className="mt-2 text-red-500 text-sm font-normal">{message}</p>
            <button
              onClick={SendRequest}
              className="bg-black hover:bg-gray-900 text-gray-200 mt-2 w-11/12 md:w-10/12 py-1.5 font-normal text-xs rounded-lg shadow"
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
                      <p>{authtype=="signin" ? "Signing in.....":"Signing up...."}</p>
                    </div>
                  ) : (
                   <p>{authtype=="signin" ? "Sign in":"Sign up"}</p>  
                  )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface InputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  authtype: string;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
  authtype,
}: InputType) {
  return (
    <div
      className={
        authtype === "signin" && (label === "FirstName" || label === "LastName")
          ? "hidden"
          : "my-2"
      }
    >
      <label className="block pb-1  text-xs font-semibold text-gray-900 dark:text-gray-200">
        {label}
      </label>
      <input
        type={type || "text"}
        onChange={onChange}
        className={
          "bg-gray-100 w-11/12 md:w-10/12 text-xs border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500   px-2.5 py-1 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        placeholder={placeholder}
      />
    </div>
  );
}
