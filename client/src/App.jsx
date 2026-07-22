import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Noteform from "./components/Noteform";
import Notecontainer from "./components/Notecontainer";
import Footer from "./components/Footer";
import Noteopen from "./components/Noteopen";
import Trashopen from "./components/Trashopen";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [isTrashOpen, setIsTrashOpen] = useState(false);
  const [error, setError] = useState("");

  // saving into local storage so every refresh don't clear out the notebook notes
  const [noteList, setNoteList] = useState(() => {
    const saved = localStorage.getItem("notebook+_notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [trashList, setTrashList] = useState(() => {
    const saved_trash = localStorage.getItem("notebook+_trash");
    return saved_trash ? JSON.parse(saved_trash) : [];
  });

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    localStorage.setItem("notebook+_notes", JSON.stringify(noteList));
  }, [noteList]);

  useEffect(() => {
    localStorage.setItem("notebook+_trash", JSON.stringify(trashList));
  }, [trashList]);

  const handleDelete = (id) => {
    const deleted_at = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const deleted = {
      title: noteList[id].title,
      detail: noteList[id].detail,
      created_at: noteList[id].created_at,
      deleted_at: deleted_at,
    };

    const newTrashList = [...trashList];
    newTrashList.push(deleted);
    setTrashList(newTrashList);
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

  const onNoteClose = () => {
    setIsNoteOpen(false);
    document.body.style.overflow = "auto";
  };

  const onNoteOpen = () => {
    setIsNoteOpen(true);
    document.body.style.overflow = "hidden";
  };

  const onTrashClose = () => {
    setIsTrashOpen(false);
    document.body.style.overflow = "auto";
  };

  const onTrashOpen = () => {
    setIsTrashOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="w-full min-h-dvh bg-[linear-gradient(30deg,#050505_70%,#151515)] pt-33.5 lg:pt-40 p-5 flex flex-col justify-center items-center gap-5">
        {/* banner */}
        <Banner
          onCreateClick={() => {
            setIsFormOpen(true);
            document.body.style.overflow = "hidden";
          }}
        />

        {/* note card container */}
        <Notecontainer
          noteList={noteList}
          onDelete={handleDelete}
          onNoteOpen={onNoteOpen}
          trashList={trashList}
          onTrashOpen={onTrashOpen}
        />

        {/* form */}
        <Noteform
          isFormOpen={isFormOpen}
          onFormClose={onFormClose}
          title={title}
          detail={detail}
          error={error}
          onTitleChange={(e) => {
            setError("");
            setTitle(e.target.value);
          }}
          onDetailChange={(e) => setDetail(e.target.value)}
          handleSubmit={handleSubmit}
          errorClose={errorClose}
        />

        {/* note open */}
        <Noteopen isNoteOpen={isNoteOpen} onNoteClose={onNoteClose} />

        {/* trash open */}
        <Trashopen isTrashOpen={isTrashOpen} onTrashClose={onTrashClose} />

        {/* footer */}
        <Footer />
      </main>
    </>
  );
};

export default App;
