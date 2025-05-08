import React from "react";

const App = () => {
  return (
    <div className="h-screen ">
      <nav className="flex justify-between text-white bg-[#095F59] p-3 items-baseline">
        <h3 className="font-bold text-[30px] text-white">SHEY</h3>
        <ul className="flex space-x-5">
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className="h-7/8 w-full flex justify-center items-center relative">
        <div
          className="polygon-clip w-full h-6/8 bg-[#095F59] absolute bottom-0 z-10 
        "
        ></div>
        <div className="circle-clip w-[162px] h-[162px] absolute top-[300px] left-[100px] bg-[#095F59D6] border-[23px] border-[#02B94B1A] z-11 rounded-full hidden md:block"></div>
        <div className="circle-clip w-[230px] h-[230px] absolute top-[530px] left-[1300px] bg-[#095F59D6] border-[48px] border-[#02B94B1A] z-11 rounded-full hidden md:block"></div>

        <div className="h-4/5 md:w-1/3 w-2/3 bg-[#FFFFFFE5] z-10 items-start p-10 shadow-lg">
          <form className="flex flex-col space-y-5">
            <h3 className="font-bold text-[50px] text-[#095F59D6] w-1/2">
              LOGIN
            </h3>
            <input
              placeholder="Username"
              className="p-2 border-1 rounded-md border-[#0000004F]"
            />
            <input
              placeholder="Password"
              className="p-2 border-1 rounded-md border-[#0000004F]"
            />
            <button className="p-2 bg-[#095F59D6] md:w-1/2 text-white rounded-md w-full">
              LOGIN
            </button>
            <div className="flex items-center w-full ">
              <div className="flex-grow h-px bg-black "></div>
              <span className="px-4 ">OR</span>
              <div className="flex-grow h-px bg-black"></div>
            </div>
            <div className="flex space-x-10 justify-center">
              <a href="">
                <img src="/google.png" width={25} height={25} />
              </a>
              <a href="">
                <img src="/facebook.png" width={25} height={25} />
              </a>
            </div>
            <p className="text-center">
              Not yet registered ,<a href="">Click Here </a>
              to sign up
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
