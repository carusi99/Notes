import NoteCard from "../notecard/NoteCard";
import styles from "./notes.module.css";

const Notes = ({ username, nm, notes }) => {
  const handleUpdateColor = async (id, color) => {
    await nm.updateNote(id, { color });
  };

  const handleUpdateNote = async (id, body) => {
    await nm.updateNote(id, body);
  };
  const handleDelete = async (id) => {
    await nm.deleteNote(id)
  }

  return <>
      {notes.filter((note) => note.pinned).length > 0 && (
        <div className={styles.notes__container + " container section"}>
          {notes.find((note) => note.pinned) && (
            <h2 className={styles.title}>Pinned</h2>
          )}
          {notes.map(note => note.pinned 
              && <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  body={note.body}
                  color={note.color}
                  user={username}
                  onUpdateColor={handleUpdateColor}
                  onNoteUpdate={handleUpdateNote}
                  onNoteDelete={handleDelete}
                  pinned={note.pinned}
                  deleted={note.deleted}
                />
          )}
        </div>
      )}

      <div className={styles.notes__container + " container section"}>
        <h2 className={styles.title}>Others</h2>
        {notes.filter((note) => !note.pinned).length > 0 
        ? notes.map(note => !note.pinned 
            && <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                color={note.color}
                user={username}
                onUpdateColor={handleUpdateColor}
                onNoteUpdate={handleUpdateNote}
                onNoteDelete={handleDelete}
                pinned={note.pinned}
                deleted={note.deleted}
                />)
         : <h1 className={styles.default__h1}>No Notes</h1>}
      </div>
    </>
}

export default Notes;
