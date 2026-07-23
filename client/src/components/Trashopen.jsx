import React from "react";
import Footer from "./Footer";
import { X } from "lucide-react";
import Trashcard from "./Trashcard";

const Trashopen = ({
  isTrashOpen,
  onTrashClose,
  trashList,
  clearTrash,
  handleTrashDelete,
  handleTrashRecycle,
  handleTrashRecycleAll
}) => {
  return (
    <section
      className={`w-full h-dvh tracking-tight leading-none bg-[#050505]/50 backdrop-blur-xs text-lg z-50 fixed top-0 left-0 justify-center items-center ${isTrashOpen ? "flex" : "hidden"} p-5 z-90`}
    >
      <div className="w-full max-w-5xl h-4/5 bg-[linear-gradient(30deg,#050505_70%,#151515)] p-2.5 rounded-4xl shadow-2xl relative flex flex-col justify-center items-center gap-2.5">
        <img
          src="/logo.svg"
          alt="notebook+ logo"
          className="w-15 mx-auto my-5 select-none"
        />

        <button
          type="button"
          onClick={onTrashClose}
          className="absolute top-5 right-5 cursor-pointer z-50"
        >
          <X
            strokeWidth={3}
            className="w-7.5 h-7.5 text-[#2a2a2a] hover:text-[#ffb72d]"
          />
        </button>

        {/* trash list */}
        <div className="w-full flex-1 min-h-0 rounded-b-4xl flex flex-col justify-center items-center">
          {trashList.length === 0 ? (
            <div className="w-full flex-1 flex flex-col justify-center items-center gap-2.5">
              <img src="/ghost.svg" alt="" className="h-1/3 select-none" />
              <p className="select-none text-lg font-semibold text-[#1e1e1e]">
                Trash is Empty!
              </p>
            </div>
          ) : (
            <div className="w-full flex-1 min-h-0 flex flex-col justify-center items-center gap-2.5">
              <div className="flex justify-center items-center gap-2.5 self-start">
                <button
                 onClick={handleTrashRecycleAll}
                 className="p-2.5 text-white/15 text-base md:text-lg hover:bg-white/3 bg-white/5 font-semibold tracking-tight leading-tight rounded-lg cursor-pointer select-none relative z-20 shadow-lg self-start">
                  Recycle all
                </button>
                <button
                  onClick={clearTrash}
                  className="p-2.5 bg-[#ffb72d] text-base md:text-lg hover:bg-red-500 font-semibold tracking-tight leading-tight text-black rounded-lg cursor-pointer select-none relative z-20 shadow-lg self-start"
                >
                  Delete all
                </button>
              </div>
              <div className="w-full flex-1 min-h-0 overflow-auto rounded-b-4xl note_scroll flex flex-col justify-start items-center gap-2.5">
                {trashList.map((elem, idx) => {
                  return (
                    <Trashcard
                      key={idx}
                      index={idx}
                      title={elem.title}
                      deleted_at={elem.deleted_at}
                      detail={elem.detail}
                      onDelete={handleTrashDelete}
                      onRecycle={handleTrashRecycle}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-5">
        <Footer />
      </div>
    </section>
  );
};

export default Trashopen;
