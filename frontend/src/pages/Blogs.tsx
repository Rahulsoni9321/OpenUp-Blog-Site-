import { AppBar } from "../Component/AppBar";

import { InfiniteScrollcomponent } from "../Component/InfinteScrollComponent";

export const AllBlogs = () => {

  return (
    <>
      <div className="  bg-white-300 rounded-md bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
        <AppBar title="New Blog"></AppBar>
      </div>

      <InfiniteScrollcomponent></InfiniteScrollcomponent>
    </>
  );
};

