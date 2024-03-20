import { Link } from "react-router-dom";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Quote = () => {
  return (
    <div className="flex flex-col bg-gray-300 h-screen overflow-auto">
      <Link to={"/"}>
        {" "}
        <div className="Logo flex gap-3 px-8 pt-4 items-center">
          <img
            className="w-16 h-10"
            src="medium-logo-F0ACFCCD58-seeklogo.com.png"
          ></img>
          <div className="text-4xl bg-gradient-to-r from-slate-800 to-black/30   text-transparent bg-clip-text  font-bold">
            OpenUp
          </div>
        </div>
      </Link>
      <div className="flex-grow  flex justify-center items-center font-sans  ">
        <MyComponent></MyComponent>
      </div>
      
    </div>
  );
};

const MyComponent: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000
  };

  return (
    <>
      <Slider {...settings} className="w-9/12 rounded-xl hover:rounded-lg shadow-xl shadow-black/70 bg-gradient-to-tr from-[#475869] to-[#ccc9c5] ">
       
       <QuoteCard Quote="I can accept failure, everyone fails at something. But I can’t accept not trying." Profession=" NBA Legend  " Author="Michael Jordan"></QuoteCard>
       <QuoteCard Quote="For youth, freedom of speech is not just a right, but a beacon guiding them towards shaping a world where voices are heard and ideas flourish." Profession=" Activist and Nobel laureate  " Author="Malala Yousafzai"  ></QuoteCard>
       <QuoteCard Quote="Nobody Panic when things go according to plan, even if the plan is horrifying" Profession="You Know " Author="The Joker"></QuoteCard>
       <QuoteCard Quote="Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it." Profession="CEO | StarGaze pvt. ltd." Author="Lou Houltz"></QuoteCard>
      </Slider>
    </>
  );
};
interface typeQuoteCard {
  Quote:string,
  Author:string,
  Profession:string
}
function QuoteCard({Quote,Author,Profession}:typeQuoteCard) {
  return <>
   <div className="flex gap-3 h-full   py-4 items-center  transform transition duration-200 hover:scale-110  overflow-y-auto  rounded-xl">
          <div className="flex-grow  flex justify-center items-center font-sans ">
            <div className="w-10/12 leading-tight flex flex-col justify-center items-center h-full">
              <div className=" sm:text-xl bg-gradient-to-r from-[#2c2c2c]   to-[#000000] inline-block text-transparent bg-clip-text  font-bold ">
              &quot; {Quote} &quot;
               </div>
              <div className=" sm:text-lg text-black opacity-70 font-semibold mt-6">
                {Author}
              </div>
              <div className=" sm:text-sm dark:text-gray-200 opacity-60 font-normal">
                {Profession}
              </div>
            </div>
          </div>
        </div>
  </>
}
