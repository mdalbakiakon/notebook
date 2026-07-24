import React from "react";
import { FileXCorner, SquareArrowOutUpRight, Clock } from "lucide-react";

const Notecard = ({
  index,
  title,
  detail,
  created_at,
  onDelete,
  onNoteOpen,
}) => {
  return (
    <div
      onClick={() => onNoteOpen(index)}
      className="w-full h-50 bg-(--bg-ter-col) rounded-2xl p-2.5 relative flex flex-col justify-center items-center gap-0 tracking-tight leading-none overflow-hidden cursor-pointer hover:bg-(--bg-sec-col) group"
    >
      {/* note delete button */}
      <button
        aria-label="delete note"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(index);
        }}
        className="bg-(--bg-sec-col) p-2.5 absolute top-0 right-0 z-50 rounded-bl-2xl cursor-pointer"
      >
        <FileXCorner className="w-6 h-6 text-(--txt-sec-col) hover:text-red-500" />
      </button>

      {/* note details */}
      <div className="flex-1 w-full h-full text-(--txt-sec-col) mt-1.5 p-0.5 rounded-lg overflow-hidden mb-2.5 whitespace-pre-wrap mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]">
        {detail}
      </div>

      {/* note title */}
      <div className="w-full h-fit tracking-tight text-left text-2xl font-semibold flex flex-col justify-between items-end gap-0">
        <div className="text-(--accent-col) w-full line-clamp-1 truncate self-start leading-none">
          {title}
        </div>
        {/* note creation date */}
        <div className="self-start text-(--txt-sec-col) text-sm leading-tight">
          {created_at}
        </div>
      </div>
    </div>
  );
};

export default Notecard;
