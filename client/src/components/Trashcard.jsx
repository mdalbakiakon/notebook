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
    <div className="w-full bg-(--bg-ter-col) shrink-0 rounded-2xl p-2.5 relative flex justify-between items-center gap-2.5 tracking-tight leading-none overflow-hidden cursor-pointer hover:bg-(--bg-sec-col) group">
      <div className="flex-1 min-w-0 flex flex-col justify-between items-start gap-2.5">
        <div className="text-white/15 line-clamp-1 w-4/5 overflow-hidden truncate">
          <span className="text-(--accent-col) self-start leading-none text-xl md:text-2xl">
            {title}
          </span>{" "}
          <span className="text-(--txt-sec-col) text-sm md:text-base leading-tight">
            {deleted_at}
          </span>
        </div>

        <div className="line-clamp-1 overflow-hidden truncate self-start text-white/25 leading-tight w-2/3 min-w-0 text-sm md:text-base">
          {detail}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2.5">
        <button aria-label="recycle note" type="button">
          <RotateCcw
            onClick={() => onRecycle(index)}
            className="bg-(--bg-sec-col) hover:text-(--accent-col) hover:opacity-100 text-(--txt-sec-col) rounded-full cursor-pointer aspect-square  w-9 h-9 p-1.5  md:w-11 md:h-11 md:p-2.5"
          />
        </button>
        <button aria-label="delete note" type="button">
          <Trash
            onClick={() => onDelete(index)}
            className="bg-(--bg-sec-col) hover:text-red-500 hover:opacity-100 text-(--txt-sec-col) rounded-full cursor-pointer w-9 h-9 p-1.5  md:w-11 md:h-11 md:p-2.5"
          />
        </button>
      </div>
    </div>
  );
};

export default Trashcard;
