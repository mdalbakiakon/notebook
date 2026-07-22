import React from "react";
import Notecard from "./Notecard.jsx";

const Notecontainer = ({ noteList, onDelete }) => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-white/5 flex-1 rounded-4xl tracking-tight leading-none p-2.5 flex">
      {noteList.length === 0 ? (
        <div className="w-full flex-1 flex flex-col justify-center items-center gap-2.5">
            <img src="/ghost.svg" alt="" className="h-1/3"/>
            <p className="select-none text-lg font-semibold text-white/10">Notebook is Empty!</p>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-5 overflow-hidden">
          <h2 className="text-3xl pt-2.5 text-white/15 select-none font-bold">
            Your Notes...
          </h2>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-start gap-2.5">
          {
            noteList.map((elem, idx)=>{
              return <Notecard key={idx} index={idx} title={elem.title} detail={elem.detail} created_at={elem.created_at} onDelete={onDelete}/>
            })
          }
          </div>
        </div>
      )}
    </section>
  );
};

export default Notecontainer;
