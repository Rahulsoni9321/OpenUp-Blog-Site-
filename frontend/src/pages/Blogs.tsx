import { AppBar } from "../Component/AppBar";

import { InfiniteScrollcomponent } from "../Component/InfinteScrollComponent";
import { UserContextProvider } from "../Context/Authuser";

export const AllBlogs = () => {


  return (
    <UserContextProvider>
    <div className="dark:bg-gradient-to-r dark:from-[#000000]/90  dark:to-slate-600/90 ">
      <div className="rounded-md">
      
        <AppBar title="Write"></AppBar>
      </div>

      <InfiniteScrollcomponent></InfiniteScrollcomponent>
    </div>
    </UserContextProvider>
    
  );
};

