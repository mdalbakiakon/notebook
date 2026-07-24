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
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [activeNoteTitle, setActiveNoteTitle] = useState("");
  const [activeNoteDetail, setActiveNoteDetail] = useState("");
  const [activeNoteCreateAt, setActiveNoteCreatedAt] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isNoteDirty, setIsNoteDirty] = useState(false);

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

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(""), 3500);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);


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

  const handleTrashDelete = (id) => {
    const updatedTrashList = trashList.filter((elem, idx) => idx !== id);
    setTrashList(updatedTrashList);
  };

  const handleTrashRecycle = (id) => {
    const recycleItem = trashList[id];
    handleTrashDelete(id);
    const newNoteList = [...noteList];
    newNoteList.push(recycleItem);
    setNoteList(newNoteList);
  };

  const handleTrashRecycleAll = () => {
    setNoteList([...noteList, ...trashList]);
    clearTrash();
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

  const successClose = () => {
    setSuccessMsg("");
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
    setActiveNoteId(null);
    setError("");
    setIsNoteDirty(false);
    document.body.style.overflow = "auto";
  };

  const onNoteOpen = (id) => {
    setActiveNoteId(id);
    setActiveNoteTitle(noteList[id].title);
    setActiveNoteDetail(noteList[id].detail);
    setActiveNoteCreatedAt(noteList[id].created_at);
    setIsNoteOpen(true);
    setIsNoteDirty(false);
    document.body.style.overflow = "hidden";
  };

  // updates the note in place, keeping the original created_at
  const handleUpdateNote = () => {
    if (activeNoteId === null) return;
    if (activeNoteTitle.trim().length === 0) {
      setError("Please enter a title for your note");
      return;
    }
    setError("");
    const updatedList = [...noteList];
    updatedList[activeNoteId] = {
      ...updatedList[activeNoteId],
      title: activeNoteTitle.trim(),
      detail: activeNoteDetail.trim(),
    };
    setNoteList(updatedList);
    setIsNoteDirty(false);
    setSuccessMsg("Note updated successfully");
  };

  // deletes the currently open note (reuses your existing trash logic) and closes the modal
  const handleDeleteActiveNote = () => {
    if (activeNoteId === null) return;
    handleDelete(activeNoteId);
    onNoteClose();
  };

  const onTrashClose = () => {
    setIsTrashOpen(false);
    document.body.style.overflow = "auto";
  };

  const onTrashOpen = () => {
    setIsTrashOpen(true);
    document.body.style.overflow = "hidden";
  };

  const clearTrash = () => {
    setTrashList([]);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="w-full min-h-dvh bg-[linear-gradient(30deg,var(--bg-main-col)_70%,var(--bg-ter-col))] pt-33.5 lg:pt-40 p-5 flex flex-col justify-center items-center gap-2.5 sm:gap-5">
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
        <Noteopen
          isNoteOpen={isNoteOpen}
          onNoteClose={onNoteClose}
          title={activeNoteTitle}
          detail={activeNoteDetail}
          created_at={activeNoteCreateAt}
          onTitleChange={(e) => {
            setError("");
            setActiveNoteTitle(e.target.value);
            setIsNoteDirty(true);
          }}
          onDetailChange={(e) => {
            setActiveNoteDetail(e.target.value);
            setIsNoteDirty(true);
          }}
          onSave={handleUpdateNote}
          onDelete={handleDeleteActiveNote}
          error={error}
          errorClose={errorClose}
          isDirty={isNoteDirty}
          success={successMsg}
          successClose={successClose}
        />

        {/* trash open */}
        <Trashopen
          isTrashOpen={isTrashOpen}
          onTrashClose={onTrashClose}
          trashList={trashList}
          clearTrash={clearTrash}
          handleTrashDelete={handleTrashDelete}
          handleTrashRecycle={handleTrashRecycle}
          handleTrashRecycleAll={handleTrashRecycleAll}
        />

        {/* footer */}
        <Footer />
      </main>
    </>
  );
};

export default App;
