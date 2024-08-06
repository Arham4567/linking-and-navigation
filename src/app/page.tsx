"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const navigate = (path: any) => {
    router.push(path);
  };
  return (
    <main>
      <div className="bg-slate-400 px-80 text-4xl  ">
        Linking and Navigation
      </div>
      <div className="underline text-black bg-amber-100">
        <Link href="/Home"> GO to home page </Link>
        <button
          onClick={() => navigate("/Home")}
          className="bg-red-700 mx-44 rounded-md flex hover:bg-red-500 px-2 
        "
        >
          Home Page
        </button>
      </div>
      <div className="underline text-black bg-amber-300">
        <Link href="/Home/Name"> GO to Name page </Link>
        <button
          onClick={() => navigate("/Home/Name")}
          className="bg-red-700 mx-44 rounded-md flex hover:bg-red-500 px-2
        "
        >
          Name Page
        </button>
      </div>
    </main>
  );
}
