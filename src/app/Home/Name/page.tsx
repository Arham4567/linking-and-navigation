"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Name() {
  const router = useRouter();
  const navigate = (path: string) => {
    router.push(path);
  };
  return (
    <main className="px-64 bg-gray-400 text-black flex ">
      <div className="text-5xl pt-5 animate-bounce">Name page</div>
      <div className="mt-5">
        <button
          onClick={() => navigate("/Home")}
          className="bg-green-700 mx-44 rounded-md flex hover:bg-green-600 px-2 
        "
        >
          Home Page
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-green-700 mx-44 mt-5 rounded-md flex hover:bg-green-600  px-3
        "
        >                            
          Main Page
        </button>
      </div>
    </main>
  );
}

export default Name;
