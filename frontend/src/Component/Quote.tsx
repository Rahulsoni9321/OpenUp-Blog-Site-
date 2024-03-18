import { Link } from "react-router-dom"

export const Quote =() =>{
    return <div className="flex flex-col bg-gray-300 h-screen overflow-auto">
          <Link to={'/'}>  <div className="flex gap-3 px-8 pt-4 items-center"><img className="w-16 h-10" src="medium-logo-F0ACFCCD58-seeklogo.com.png"></img><div className="text-4xl bg-gradient-to-r from-slate-800 to-black/30   text-transparent bg-clip-text  font-bold">OpenUp</div></div></Link>
    <div className="flex-grow  flex justify-center items-center font-sans ">
           <div className="w-3/4 leading-tight">
            <div className=" sm:text-2xl text-black font-bold ">"For youth, freedom of speech is not just a right, but a beacon guiding them towards shaping a world where voices are heard and ideas flourish." </div>
            <div className=" sm:text-lg text-black font-semibold mt-6">Malala Yousafzai</div>
            <div className=" sm:text-sm text-gray-500 font-normal">Activist and Nobel laureate</div>
           </div>
    </div>
    </div>
}