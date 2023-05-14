import React, { useState } from "react";

function CalcComp() {
  const [results, setResults] = useState("");
  
  const handleClick=(e)=>{
setResults(
results.concat(e.target.name)
)
  }
  const Clear=()=>{
    setResults(results.slice(0, results.length-1))
  }
  const total=()=>{
    try{
    setResults(eval(results).toString())
    }
    catch(err){
      setResults("Error")
    }
  }


  return (
    <div className="w-[100%] mx-auto flex flex-col justify-center items-center my-10">
      <div className="  bg-black  border border-solid py-4 px-4 pt-8 mx-auto">
        <form>
          <input className="px-2 border focus:outline-none focus:ring-white py-3 w-full bg-black text-white " type="text" value={results}></input>
        </form>
        <div className="grid grid-cols-4 gap-2 py-3">
         
          <div className="">
            <button onClick={Clear} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="clear">
              C
            </button>
          </div>
          <div className="">
            <button   onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="+">
              +
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="-">
              -
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="*">
              x
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="/">
              /
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="9">
              9
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="8">
              8
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="7">
              7
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="6">
              6
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="5">
              5
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="4">
              4
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="3">
              3
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="2">
              2
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="1">
              1
            </button>
          </div>
          <div className="">
            <button  onClick={handleClick} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="0">
              0
            </button>
          </div>
          <div className="">
            <button  onClick={total} className="hover:bg-orange-500 hover:text-black hover:border-orange-500 border px-4 py-2 bg-black text-white rounded-lg shadow-md " name="=">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcComp;
