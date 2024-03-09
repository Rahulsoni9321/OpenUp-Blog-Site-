export const BlogSkeleton = () => {
  return (
    <div className="flex justify-center px-20">
      <div className="mt-12 rounded-md p-4  w-8/12 ">
        <div className="animate-pulse flex items-center  w-full  gap-4">
          <div className="rounded-full bg-gray-300 h-8 w-8"></div>
          <div className=" bg-gray-300 rounded-lg w-11/12 h-3"></div>
        </div>
        <div className="py-4 ">
            <div className="animate-pulse ">
              <div className="h-6  bg-gray-300 rounded-lg w-full"></div>
            </div>
            <div className="h-2 bg-gray-300 animate-pulse rounded w-full p-7 mt-4"></div>
          </div>
        </div>
    </div>
  );
};
