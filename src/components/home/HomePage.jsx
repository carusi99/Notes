import Notes from '../notes/index.js';
import CreateNote from '../createNote/index.js';
import { useEffect, useState } from 'react';
import NotesMannager from "../../NotesMannager/NotesMannager.js"
import styles from "./homepage.module.css"
import Sidebar from "../Sidebar/Sidebar.jsx"
import Header from "../Header/Header.jsx"
import Trash from '../Trash/Trash.jsx';



const HomePage = ({ username, onLogout }) => {
  const [showTrash, setShowtrash] = useState(false)
  const [notes, setNotes] = useState([])

  const nm = new NotesMannager(username, setNotes)
  useEffect(() => {
    nm.getNotes();
  }, [username]);

  return (
   <>
    <Header  handleState={onLogout}/>
    <div className={styles.homepage__container}>
      <Sidebar setShowtrash={setShowtrash} showTrash={showTrash} />
      <div className={styles.notes__container}>
      {!showTrash && <CreateNote nm={nm}/>}
      {!showTrash && <Notes username={username} nm={nm} notes={notes.filter(note => !note.deleted)}/>}

      {showTrash && <Trash  notes={notes.filter(note => note.deleted)} nm={nm} username={username}/>}
      </div>
    </div>

    </>
  ); 
};

export default HomePage;
