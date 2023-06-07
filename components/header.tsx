"use client";
import { useRouter } from "next/navigation";
import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { Button } from "./button";

type Props = {
  children: ReactNode;
  className?: string;
};
export const Header: FC<Props> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {};
  return (
    <header
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="flex w-full mb-4 items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="bg-black rounded-full flex items-center justify-center hover:opacity-75 transition text-white"
            onClick={() => router.back()}
          >
            <RxCaretLeft size={35} />
          </button>
          <button
            className="bg-black rounded-full flex items-center justify-center hover:opacity-75 transition text-white"
            onClick={() => router.forward()}
          >
            <RxCaretRight size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white text-black flex items-center justify-center hover:opacity-75 transition">
            <HiHome size={20} />
          </button>
          <button className="rounded-full p-2 bg-white text-black flex items-center justify-center hover:opacity-75 transition">
            <BsSearch size={20} />
          </button>
        </div>
        <div>
          <Button
            onClick={() => {}}
            className="bg-transparent text-neutral-300 font-medium"
          >
            Sign Up
          </Button>
        </div>
        <div>
          <Button onClick={() => {}} className="bg-white px-6 py-2">
            Log in
          </Button>
        </div>
      </div>
      {children}
    </header>
  );
};
