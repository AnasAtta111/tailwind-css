"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<string[]>([]);

  const addData = () => {
    setData([...data, input]);
    setInput("");
  };

  const deleteItem = (index:any) => {
    data.splice(index, 1);
    setData([...data])
  }

  return (
    <div className="flex bg-blue-100 flex-wrap w-full">
      <div className="bg-zinc-500 text-yellow-300 font-bold justify-center flex w-full text-7xl p-4">
        <h1>ToDo App</h1>
      </div>
      <div className="bg-gray-600 flex flex-wrap justify-center w-full p-8 text-white space-x-4">
        <label htmlFor="inp" className="text-4xl">
          Todo Entering Text:
        </label>
        <input
          id="inp"
          value={input}
          className="bg-blue-600"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button className="bg-gray-900 px-6 rounded-full" onClick={addData}>
          Add More
        </button>
      </div>
      <div className="flex  w-full justify-center text-center flex-col ">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex space-x-9 flex-wrap justify-center border-cyan-950"
            >
              <h1 className="text-4xl w-9/12 mb-4">{data}</h1>
              <button className="bg-red-300 p-3 rounded-full border-cyan-950 m-4" onClick={deleteItem}>
                Delete it
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
