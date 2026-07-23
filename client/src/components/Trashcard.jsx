import React from "react";
import { Trash, RotateCcw } from "lucide-react";

const Trashcard = ({
  index,
  title,
  deleted_at,
  detail,
  onDelete,
  onRecycle
}) => {
  return (
    <div className="w-full bg-white/5 rounded-2xl p-2.5 relative flex justify-between items-center gap-0 tracking-tight leading-none overflow-hidden cursor-pointer hover:bg-white/3 group">
      <div className="flex-1 min-w-0 flex flex-col justify-between items-start gap-2.5">
        <div className="text-[#ffb72d] self-start leading-none text-3xl">
          {title}{" "}
          <span className="text-white/15 text-sm leading-tight">
            {deleted_at}
          </span>
        </div>

        <div className="line-clamp-1 overflow-hidden truncate self-start text-white/25 leading-tight w-1/2 min-w-0">
          {detail}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2.5">
        <button>
          <RotateCcw
            onClick={() => onRecycle(index)}
            className="bg-[#1e1e1e] hover:text-[#ffb72d] hover:opacity-100 text-white/10 rounded-full cursor-pointer aspect-square  w-11 h-11 p-2.5"
          />
        </button>
        <button>
          <Trash
            onClick={() => onDelete(index)}
            className="bg-[#1e1e1e] hover:text-red-500 hover:opacity-100 text-white/10 rounded-full cursor-pointer w-11 h-11 p-2.5"
          />
        </button>
      </div>
    </div>
  );
};

export default Trashcard;
