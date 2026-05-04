import { useEffect, useState } from "react";
import { getNotes } from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 DevOps Notes App</h1>

      <NoteForm refresh={fetchNotes} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
