import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Toaster } from "react-hot-toast"
import { Blog } from "./pages/Blog"
import { AllBlogs } from "./pages/Blogs"


function App() {
   
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/Signup" element={<Signup></Signup>}></Route>
      <Route path="/Signin" element={<Signin></Signin>}></Route>
      <Route path="/Blog/:id" element={<Blog></Blog>}></Route>
      <Route path="/Blog" element={<AllBlogs></AllBlogs>}></Route>
     </Routes>
     <Toaster></Toaster>
     </BrowserRouter>
    </>
  )
}

export default App
