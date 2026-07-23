import React from "react";
import { Trash, RotateCcw } from "lucide-react";

const Trashcard = ({
  index,
  title,
  deleted_at,
  detail,
  onDelete,
  onRecycle,
}) => {
  return (
    <div className="w-full bg-white/5 rounded-2xl p-2.5 relative flex justify-between items-center gap-2.5 tracking-tight leading-none overflow-hidden cursor-pointer hover:bg-white/3 group">
      <div className="flex-1 min-w-0 flex flex-col justify-between items-start gap-2.5">
        <div className="text-white/15 line-clamp-1 w-4/5 overflow-hidden truncate">
          <span className="text-[#ffb72d] self-start leading-none text-xl md:text-2xl">{title}</span>{" "}
          <span className="text-white/15 text-sm md:text-base leading-tight">
            {deleted_at}
          </span>
        </div>

        <div className="line-clamp-1 overflow-hidden truncate self-start text-white/25 leading-tight w-2/3 min-w-0 text-sm md:text-base">
          {detail}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2.5">
        <button>
          <RotateCcw
            onClick={() => onRecycle(index)}
            className="bg-[#1e1e1e] hover:text-[#ffb72d] hover:opacity-100 text-white/10 rounded-full cursor-pointer aspect-square  w-9 h-9 p-1.5  md:w-11 md:h-11 md:p-2.5"
          />
        </button>
        <button>
          <Trash
            onClick={() => onDelete(index)}
            className="bg-[#1e1e1e] hover:text-red-500 hover:opacity-100 text-white/10 rounded-full cursor-pointer w-9 h-9 p-1.5  md:w-11 md:h-11 md:p-2.5"
          />
        </button>
      </div>
    </div>
  );
};

export default Trashcard;
