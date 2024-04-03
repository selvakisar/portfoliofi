import React from "react";
import "./Anime.css";
export default function Projects() {
  return (
    <div>
      <h1 className="text-6xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center  font-serif font-semibold underline py-6">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div>
          <h1 className=" flex justify-center items-center text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-center  font-serif font-semibold">Interviwe App</h1>

          <div className="bg-sky-900 border-2 border-neutral-950 shadow-lg shadow-red-500/75 md:shadow-xl md:shadow-red-500/75 flex justify-center items-center rounded-lg">
            <div className=" px-2">
              <img
                className=" rounded-lg h-[240px] w-[480px]"
                src="https://i.pinimg.com/564x/a8/e8/59/a8e859c055cf3f928ebca44d57fa8bd9.jpg"
                alt="p1"
              />

              <div className=" grid grid-cols-2 gap-3 mx-2 py-2 ">
                <a
                  href="https://delicate-sunflower-aa11c9.netlify.app"
                  target="blank"
                >
                  <button className="btn btn-primary"> Live</button>
                </a>
                <a
                  href="https://github.com/selvakisar/interview-notes"
                  target="blank"
                >
                  <button className="btn btn-primary"> Source Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
        <h1 className=" flex justify-center items-center text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-center  font-serif font-semibold">Blog App</h1>

          <div className="bg-sky-900 border-2 border-neutral-950 shadow-lg shadow-red-500/75 md:shadow-xl md:shadow-red-500/75 flex justify-center items-center rounded-lg">
            <div className=" px-2">
              <img
                className=" rounded-lg h-[240px] w-[480px]"
                src="https://i.pinimg.com/564x/60/44/71/604471ed304322decb60d7c52b4632a3.jpg"
                alt="p1"
              />

              <div className=" grid grid-cols-3 gap-3 mx-2 py-2 ">
                <a href=" https://blogmern123.netlify.app" target="blank">
                  <button className="btn btn-primary"> Live</button>
                </a>
                <a
                  href=" https://github.com/selvakisar/blog-front-end "
                  target="blank"
                >
                  <button className="btn btn-primary"> FE Code</button>
                </a>
                <a
                  href=" https://github.com/selvakisar/blog-app-server "
                  target="blank"
                >
                  <button className="btn btn-primary"> BE Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
        <h1 className=" flex justify-center items-center text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-center  font-serif font-semibold">
            Realtime Chat app
          </h1>

          <div className="bg-sky-900 border-2 border-neutral-950 shadow-lg shadow-red-500/75 md:shadow-xl md:shadow-red-500/75 flex justify-center items-center rounded-lg">
            <div className=" px-2">
              <img
                className=" rounded-lg h-[240px] w-[480px]"
                src="https://i.pinimg.com/564x/b6/7a/1a/b67a1a7225539923840cc698dcceb169.jpg"
                alt="p1"
              />

              <div className=" grid grid-cols-3 gap-3 mx-2 py-2 ">
                <a
                  href=" https://guileless-alpaca-2fae35.netlify.app"
                  target="blank"
                >
                  <button className="btn btn-primary"> Live</button>
                </a>
                <a
                  href=" https://github.com/selvakisar/chat-app-client "
                  target="blank"
                >
                  <button className="btn btn-primary"> FE Code</button>
                </a>
                <a
                  href="https://github.com/selvakisar/chat-app-server "
                  target="blank"
                >
                  <button className="btn btn-primary"> BE Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
        <h1 className=" flex justify-center items-center text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-center  font-serif font-semibold">Diet Plan app</h1>

          <div className="bg-sky-900 border-2 border-neutral-950 shadow-lg shadow-red-500/75 md:shadow-xl md:shadow-red-500/75 flex justify-center items-center rounded-lg">
            <div className=" px-2">
              <img
                className=" rounded-lg h-[240px] w-[480px]"
                src="https://i.pinimg.com/564x/7d/f4/23/7df423365c0277f6c43fc41f7a56029d.jpg"
                alt="p1"
              />

              <div className=" grid grid-cols-3 gap-3 mx-2 py-2 ">
                <a href=" https://zonezero-fit.netlify.app" target="blank">
                  <button className="btn btn-primary"> Live</button>
                </a>
                <a
                  href=" https://github.com/selvakisar/Diet-suggestion-app-frontend
                  "
                  target="blank"
                >
                  <button className="btn btn-primary"> FE Code</button>
                </a>
                <a
                  href="https://github.com/selvakisar/Diet-suggestion-app-backend"
                  target="blank"
                >
                  <button className="btn btn-primary"> BE Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
