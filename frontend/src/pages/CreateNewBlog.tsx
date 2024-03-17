import { AppBar } from "../Component/AppBar"
import { CreatePost } from "../Component/CreatePost"

export const CreateBlog=()=>{
    return <>
     <div className="" >
          <AppBar title="Publish"></AppBar>
        </div>
      <CreatePost></CreatePost>
    </>
}