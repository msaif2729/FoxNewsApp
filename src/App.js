import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";

function App() {
  let page = 1;
  let pageSize = 80;

  const ref = useRef();

  const handleprogress = (progres) => {
    ref.current.style.transitionDuration="1s"
    ref.current.style.width = progres.toString()+"%";
    if(progres==100)
      {
      ref.current.style.transform="translateX(100%)"
      setTimeout(() => {
        ref.current.style.transitionDuration="0s"
        ref.current.style.display="none";
        ref.current.style.width = "0%";
        ref.current.style.display="block"
        ref.current.style.transform="translateX(-200%)"
        }, 1000);
    }

  };

  // const onToggle = () => {
  //   setToggle(!toggle);
  //   if (toggle) {
  //     ref.current.style.width = "100%";
  //     setTimeout(() => {
  //       ref.current.style.backgroundColor = "black";
  //     }, 500);
  //   } else {
  //     ref.current.style.backgroundColor = "red";
  //     ref.current.style.width = "0%";
  //   }
  // };

  return (
    <div className="App overflow-x-hidden  h-full ">
      <Router>
        <div className="h-[4px] lx:h-[2px] z-10 w-full bg-black fixed">
          <span
            className=" w-0 h-[4px] lx:h-[2px] bg-red-600 transition-all duration-500 ease-in block"
            ref={ref}
          ></span>
        </div>
        <Navbar />  
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={handleprogress}
                key="general"
                category="general"
                page={page}
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={handleprogress}
                key="business"
                category="business"
                page={page}
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={handleprogress}
                key="entertainment"
                category="entertainment"
                page={page}
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={handleprogress}
                key="health"
                category="health"
                page={page}
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={handleprogress}
                key="science"
                category="science"
                page={page}
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={handleprogress}
                key="sports"
                category="sports"
                page={page}
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={handleprogress}
                key="technology"
                category="technology"
                page={page}
                pageSize={pageSize}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
