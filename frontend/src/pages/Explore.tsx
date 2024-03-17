import { LandingAppBar } from "../Component/LandingAppBar";
import { LimitedBlogs } from "../Component/LimitedBlog";

export function Explore() {
  return (
    <div className="dark:bg-gradient-to-r dark:from-[#000000]/90  dark:to-slate-700/90">
      <LandingAppBar></LandingAppBar>
      <div className="mt-24 ml-20 ">
        <LimitedBlogs></LimitedBlogs>
      </div>
    </div>
  );
}
