import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Toaster } from "react-hot-toast"
import { Blog } from "./pages/Blog"
import { AllBlogs } from "./pages/Blogs"
import { CreateBlog } from "./pages/CreateNewBlog"
import { LandingPage } from "./pages/LandingPage"
import { Explore } from "./pages/Explore"
import { Userprofile } from "./pages/Profile"



function App() {

   
  return (
    
    <>
     <BrowserRouter>
     <Routes>
    
      <Route path="/Signup" element={<Signup></Signup>}></Route>
      <Route path="/Signin" element={<Signin></Signin>}></Route>
      <Route path="/Blog/explore" element={<Explore/>}></Route>
      <Route path="/" element={localStorage.getItem('token')?<Navigate to={'/Blog'}></Navigate>:<LandingPage></LandingPage>}></Route>
      <Route path="/Blog/:id" element={<Blog></Blog>}></Route>
      <Route path="/:name" element={<Userprofile></Userprofile>}></Route>
      <Route path="/Blog" element={<AllBlogs></AllBlogs>}></Route>
      <Route path="/Blog/Create" element={<CreateBlog/>}></Route>
     </Routes>
     <Toaster></Toaster>
     </BrowserRouter>
    </>
  )
}

export default App
