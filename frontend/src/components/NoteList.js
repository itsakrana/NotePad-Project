function NoteList({ notes }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note._id}>{note.text}</li>
      ))}
    </ul>
  );
}

export default NoteList;
