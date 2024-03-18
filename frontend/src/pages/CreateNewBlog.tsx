import { useEffect, useState } from "react"
import { AppBar } from "../Component/AppBar"
import { CreatePost } from "../Component/CreatePost"
import { UserContextProvider } from "../Context/Authuser";

export const CreateBlog=()=>{
  const [loader,setloader]=useState(true);
  
  useEffect(()=>{
     setTimeout(() => {
      setloader(false)
     }, 400);

    }
  ,[])
     if (loader){
      return  < div className="dark:bg-gradient-to-r dark:from-[#000000]/90  dark:to-slate-600/90 flex justify-center items-center h-screen">
       <div className="flex justify-center  items-center gap-3">
       <span className="loading loading-bars loading-lg"></span>
                      <p className="text-lg font-medium">Loading...</p>
                    </div>

     </div>
     }

    return <UserContextProvider>
      < div className="dark:bg-gradient-to-r dark:from-[#000000]/90  dark:to-slate-600/90">
     <div>
          <AppBar title="Publish"></AppBar>
        </div>
      <CreatePost></CreatePost>
    </div>
    </UserContextProvider>
}