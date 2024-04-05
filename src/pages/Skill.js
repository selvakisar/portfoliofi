import React from "react";
import { FaHtml5,FaCss3, FaJs,FaReact,FaNodeJs, FaExchangeAlt,FaDatabase,FaCopy,FaGit, FaCode, FaPhotoVideo, FaAws} from "react-icons/fa";
export const Skill = () => {
  return (
    <div>
    <h1 className="text-6xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center  font-serif font-semibold underline py-6 max-h-screen text-gray-50" > My Expertise </h1>
      
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className=" bg-slate-900 p-4   rounded-xl shadow-xl shadow-pink-600/75 md:shadow-xl md:shadow-pink-600/75">
        <h1 className="text-xl text-pink-600 underline font-sans font-semibold ">
          Front-End
        </h1>
        <div className="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-3 xl:grid-rows-3 gap-4 justify-start items-center px-3 my-3">
          <div className="text-xl text-green-300  border-l-4 border-cyan-300 px-1">
            Html
            <span className="mx-2">
              <FaHtml5 className="inline-block text-red-600 " />
            </span>
          </div>
          <div className="text-xl text-green-300 border-l-4 border-cyan-300 px-1">
            Css
            <span className="mx-2">
              <FaCss3 className=" inline-block text-red-600 " />
            </span>
          </div>
          <div className="text-xl text-green-300 border-l-4 border-cyan-300 px-1">
            JavaScript
            <span className="mx-2">
              <FaJs className="inline-block text-red-600 " />
            </span>
          </div>
          <div className="text-xl text-green-300 border-l-4 border-cyan-300 px-1">
            Reactjs
            <span className="mx-2">
              <FaReact className="inline-block text-red-600 " />
            </span>
          </div>
        </div>
      </div>





      <div className=" bg-slate-900 p-4   rounded-xl shadow-xl shadow-pink-600/75 md:shadow-xl md:shadow-pink-600/75">
        <h1 className="text-xl text-pink-600 underline font-sans font-semibold ">
          Back-End
        </h1> 


        <div className="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-3 xl:grid-rows-3 gap-4 justify-start items-center px-3 my-3">
          <div className="text-xl text-green-300  border-l-4 border-cyan-300 px-1">
            ExpressJs
            <span className="mx-2">
              <FaExchangeAlt className="inline-block text-red-600 " />
            </span>
          </div>
          <div className="text-xl text-green-300 border-l-4 border-cyan-300 px-1">
            NodeJs
            <span className="mx-2">
              <FaNodeJs className=" inline-block text-red-600 " />
            </span>
          </div>
        
        </div>
        
        </div>







        <div className=" bg-slate-900 p-4   rounded-xl shadow-xl shadow-pink-600/75 md:shadow-xl md:shadow-pink-600/75">
        <h1 className="text-xl text-pink-600 underline font-sans font-semibold ">
        Database
        </h1> 


        <div className="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-3 xl:grid-rows-3 gap-4 justify-start items-center px-3 my-3">
          <div className="text-xl text-green-300  border-l-4 border-cyan-300 px-1">
          MongoDB
            <span className="mx-2">
              <FaDatabase className="inline-block text-red-600 " />
            </span>
          </div>
          <div className="text-xl text-green-300 border-l-4 border-cyan-300 px-1">
          MySQL
            <span className="mx-2">
              <FaCopy className=" inline-block text-red-600 " />
            </span>
          </div>
        
        </div>
        
        </div>




        <div className=" bg-slate-900 p-4   rounded-xl shadow-xl shadow-pink-600/75 md:shadow-xl md:shadow-pink-600/75">
        <h1 className="text-xl text-pink-600 underline font-sans font-semibold ">
        Others
        </h1> 


        <div className="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-3 xl:grid-rows-3 gap-4 justify-start items-center px-3 my-3">
          <div className="text-xl text-green-300  border-l-4 border-cyan-300 px-1">
          GitHub
            <span className="mx-2">
              <FaGit className="inline-block text-red-600 " />
            </span>
          </div>
          <div className="text-xl text-green-300 border-l-4 border-cyan-300 px-1">
          VSCode
            <span className="mx-2">
              <FaCode className=" inline-block text-red-600 " />
            </span>
          </div>
        
          <div className="text-xl text-green-300 border-l-4 border-cyan-300 px-1">
     Photoshop
            <span className="mx-2">
              <FaPhotoVideo className=" inline-block text-red-600 " />
            </span>
          </div>


          <div className="text-xl text-green-300 border-l-4 border-cyan-300 px-1">
       AWS
            <span className="mx-2">
              <FaAws className=" inline-block text-red-600 " />
            </span>
          </div>
        
        
        </div>
        
        </div>
    </div>
      
      




      
      
      
      </div>
  );
};
