import { useState } from "react";
import { addNote } from "../api";

function NoteForm({ refresh }) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!text) return;
    await addNote({ text });
    setText("");
    refresh();
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default NoteForm;
