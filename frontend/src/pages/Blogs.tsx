import { AppBar } from "../Component/AppBar";

import { InfiniteScrollcomponent } from "../Component/InfinteScrollComponent";

export const AllBlogs = () => {

  return (
    <div className="">
      <div className="   rounded-md  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
        <AppBar title="Write"></AppBar>
      </div>

      <InfiniteScrollcomponent></InfiniteScrollcomponent>
    </div>
  );
};

