import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Noteform from "./components/Noteform";
import Notecontainer from "./components/Notecontainer";
import Footer from "./components/Footer";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [error, setError] = useState("");

  // saving into local storage so every refresh don't clear out the notebook notes
  const [noteList, setNoteList] = useState(() => {
    const saved = localStorage.getItem("notebook+_notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    localStorage.setItem("notebook+_notes", JSON.stringify(noteList));
  }, [noteList]);

  const handleDelete = (id) => {
    const updatedList = noteList.filter((elem, idx) => idx !== id);
    setNoteList(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0) {
      setError("Please enter a title for your note");
      return;
    }
    setError("");
    const newList = [...noteList];
    const created_at = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    newList.push({ title: title.trim(), detail: detail.trim(), created_at });
    setNoteList(newList);
    setTitle("");
    setDetail("");
  };

  const errorClose = () => {
    setError("");
  };

  const onFormClose = () => {
    setIsFormOpen(false);
    setTitle("");
    setDetail("");
    setError("");
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="w-full min-h-dvh bg-[linear-gradient(30deg,#050505_70%,#111)] pt-33.5 lg:pt-40 p-5 flex flex-col justify-center items-center gap-5">
        {/* banner */}
        <Banner
          onCreateClick={() => {
            setIsFormOpen(true);
            document.body.style.overflow = "hidden";
          }}
        />

        {/* note card container */}
        <Notecontainer noteList={noteList} onDelete={handleDelete} />

        {/* form */}
        <Noteform
          isFormOpen={isFormOpen}
          onFormClose={onFormClose}
          title={title}
          detail={detail}
          error={error}
          onTitleChange={(e) => setTitle(e.target.value)}
          onDetailChange={(e) => setDetail(e.target.value)}
          handleSubmit={handleSubmit}
          errorClose={errorClose}
        />

        {/* footer */}
        <Footer />
      </main>
    </>
  );
};

export default App;
