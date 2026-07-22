import React from "react";
import { FileXCorner, SquareArrowOutUpRight, Clock } from "lucide-react";

const Notecard = ({ index, title, detail, created_at, onDelete }) => {
  return (
    <div className="w-full h-50 bg-white/5 rounded-2xl p-2.5 relative flex flex-col justify-center items-center gap-0 tracking-tight leading-none overflow-hidden">

      {/* note delete button */}
      <div className="bg-[#1e1e1e] p-2.5 absolute top-0 right-0 z-20 rounded-bl-2xl">
        <FileXCorner onClick={() => onDelete(index)} className="w-6 h-6 text-white opacity-10 cursor-pointer hover:text-red-500 hover:opacity-100" />
      </div>

      {/* note details */}
      <div className="flex-1 w-full h-full text-white/30 mt-1.5 p-0.5 rounded-lg overflow-hidden text-ellipsis relative mb-2.5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_65%,#1e1e1e)] z-10"></div>
        {detail}
      </div>

      {/* note title */}
      <div className="w-full h-fit tracking-tight text-left text-2xl font-semibold flex flex-col justify-between items-end gap-0">
        <div className="text-[#ffb72d] w-full line-clamp-1 truncate self-start leading-none">
          {title}
        </div>
        {/* note creation date */}
        <div className="self-start text-white/15 text-sm leading-tight">{created_at}</div>
      </div>
    </div>
  );
};

export default Notecard;
