"use client";
import Link from "next/link";
import "../globals.css";

import { ReactNode, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [input, setInput] = useState("");

  return (
    <div className="bg-pink-700 h-8 w-full fixed top-0">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Link href="/loginuser" className="text-[1.5rem] text-blue-500 underline">
        Login User
      </Link>{" "}
      <Link
        href="/loginadmin"
        className="text-[1.5rem] text-blue-500 underline"
      >
        Login Admin
      </Link>{" "}
      <Link
        href="/loginuser/profile"
        className="text-[1.5rem] text-blue-500 underline"
      >
        Login User
      </Link>
      {children}
    </div>
  );
}
