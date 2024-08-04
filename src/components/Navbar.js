import fox from "./fox.png";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const reff = useRef(null);
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);

  const showoptions = () => {
    reff.current.style.display =
      reff.current.style.display === "block" ? "none" : "block";
    console.log(reff.current.style.display);
    if (reff.current.style.display === "block") {
      div1.current.style.transform = "translateY(0.375rem) rotate(-45deg)";
      div2.current.style.transform = "rotate(45deg)";
      div3.current.style.display = "none";
    } else {
      div1.current.style.transform = "translateY(-0.375rem)";
      div1.current.style.transform = "rotate(0deg)";
      div2.current.style.transform = "rotate(0deg)";
      div3.current.style.display = "block";
    }
    reff.current.style.backgroundColor = "#FFFFFF";
  };

  return (
    <div className="fixed w-full z-40 mt-[2px]">
      <nav className=" navbar flex bg-black justify-between ">
      <Link to="/">
        <div className="flex">
          
          <img src={fox} alt="" className=" h-6 self-center ml-6 " />
          <h1 className=" text-xl cursor-pointer font-bold text-white self-center mx-2">
            FoxNews
          </h1>
        </div>
        </Link>
        <div className=" flex">
          <div
            className="p-4 self-center space-y-1 block lg:hidden"
            onClick={showoptions}
          >
            <div
              className="l1 h-[2px] w-5 bg-white transition-all ease-in"
              ref={div1}
            ></div>
            <div
              className="l2 h-[2px] w-5 bg-white transition-all ease-in "
              ref={div2}
            ></div>
            <div className="l3 h-[2px] w-5 bg-white " ref={div3}></div>
          </div>
          <div className="options hidden lg:flex">
            <ul className="flex space-x-5 px-5 py-2 text-white bg-black font-semibold font-sans ">
              <li className=" mt-1 cursor-pointer group flex flex-col">
                <Link  to="/">Home</Link>
                <span className=" bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white transition-all ease-in"></span>
              </li>
              <li className=" mt-1 cursor-pointer group flex flex-col">
                <Link  to="/business">Business</Link>
                <span className=" bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white transition-all ease-in"></span>
              </li>
              <li className=" mt-1 cursor-pointer group flex flex-col">
                <Link  to="/entertainment">Entertainment</Link>
                <span className=" bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white transition-all ease-in"></span>
              </li>
              <li className=" mt-1 cursor-pointer group flex flex-col">
                <Link  to="/health">Health</Link>
                <span className=" bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white transition-all ease-in"></span>
              </li>
              <li className=" mt-1 cursor-pointer group flex flex-col">
                <Link  to="/science">Science</Link>
                <span className=" bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white transition-all ease-in"></span>
              </li>
              <li className=" mt-1 cursor-pointer group flex flex-col">
                <Link  to="/sports">Sports</Link>
                <span className=" bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white transition-all ease-in"></span>
              </li>
              <li className=" mt-1 cursor-pointer group flex flex-col">
                <Link  to="/technology">Technology</Link>
                <span className=" bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white transition-all ease-in"></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="options hidden lg:hidden fixed z-30 w-full" ref={reff}>
        <ul className=" space-y-5 divide-y-1 divide-white px-5 py-10 text-white bg-gray-900 font-semibold font-sans lg:hidden">
          <li className=" mt-1 cursor-pointer group flex flex-col">
            <Link  to="/">Home</Link>
          </li>
          <li className=" mt-1 cursor-pointer group flex flex-col">
                <Link  to="/business">Business</Link>
          </li>
          <li className=" mt-1 cursor-pointer group flex flex-col">
            <Link  to="/entertainment">Entertainment</Link>
          </li>
          <li className=" mt-1 cursor-pointer group flex flex-col">
            <Link  to="/health">Health</Link>
          </li>
          <li className=" mt-1 cursor-pointer group flex flex-col">
            <Link  to="/science">Science</Link>
          </li>
          <li className=" mt-1 cursor-pointer group flex flex-col">
            <Link  to="/sports">Sports</Link>
          </li>
          <li className=" mt-1 cursor-pointer group flex flex-col">
            <Link  to="/technology">Technology</Link> 
          </li>
        </ul>
      </div>
    </div>
  );
}
