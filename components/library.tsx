"use client";
import type { FC } from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
type Props = {};

export const Library: FC<Props> = () => {
  const handleClick = () => {};
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-5 pt-4 text-neutral-400">
        <p className="flex items-center gap-x-2">
          <TbPlaylist size={26} />
          <span className="font-medium text-md">Your Playlist</span>
        </p>
        <AiOutlinePlus
          size={20}
          className="cursor-pointer hover:text-white transition-colors"
          onClick={handleClick}
        />
      </div>
      <div className="flex flex-col mt-4 px-4 gap-y-2">List of songs</div>
    </div>
  );
};
