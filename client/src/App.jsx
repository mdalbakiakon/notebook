import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Noteform from "./components/Noteform";
import Notecontainer from "./components/Notecontainer";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="w-full min-h-dvh bg-[linear-gradient(30deg,#050505_70%,#111)] pt-38.5 p-5 flex flex-col justify-center items-center gap-2.5">
        {/* banner */}
        <Banner
          onCreateClick={() => {
            setIsFormOpen(true);
            document.body.style.overflow = "hidden";
          }}
        />

        {/* note card container */}
        <Notecontainer />

        {/* form */}
        <Noteform
          isFormOpen={isFormOpen}
          onCloseClick={() => {
            setIsFormOpen(false);
            document.body.style.overflow = "auto";
          }}
        />
      </main>
    </>
  );
};

export default App;
