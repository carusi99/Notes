import { useState } from "react";
import NoteCard from "../notecard/NoteCard.jsx";
import styles from "../notes/notes.module.css";

export default function Trash({ notes, nm, username }) {
    const handleUpdateNote = async (id, body) => {
        await nm.updateNote(id, body)
    };
    const handleDelete = async (id) => {
         await nm.deleteNote(id)
         await nm.getNotes()
    }
  return <>
      <div className={styles.notes__container + " container section"}>
        {notes.map(note => (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            color={note.color}
            user={username}
            onUpdateColor={handleUpdateNote}
            onNoteUpdate={handleUpdateNote}
            pinned={note.pinned}
            deleted={note.deleted}
            onNoteDelete={handleDelete}
          />
        ))}
      </div>
    </>
}
