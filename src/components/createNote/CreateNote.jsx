import styles from "./createnote.module.css";
import { useState } from "react";
import ColorPaletteButton from "../colorpalleteButton/ColorPaletteButton";

const CreateNote = ({nm}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor] = useState('#fff')
    const [errorInput, setErrorInput] = useState('');

    const handleButtonClick = async() => {
        if (title.trim() === '' || content.trim() === '') {
          setErrorInput('No se aceptan campos vacios');
          setTimeout(() => {
            setErrorInput('');
          }, 1000);
        } else {
          let response = await nm.createNote({title:title,body:content, color:color})
          if(response.ok){
            setTitle('')
            setColor("white")
            setContent("")
          }else{
            setErrorInput('Problema al cargar tu nota');
          setTimeout(() => {
            setErrorInput('');
          }, 1000);
          }
        }
      };

    const handleContentChange = (e) => {
        setContent(e.target.value);
        setErrorInput('');
      };

      const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setErrorInput('');
      };
     
   return (
    <section className={styles.form__container +" section container"} >
      <div className={styles.borde} style={{backgroundColor:color}}>
        <div className={styles.form__inputs}>
            <input className={styles.input}
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Title"
              
            />
            <textarea className={styles.input}
              placeholder="your note..."
              value={content}
              onChange={handleContentChange}
            />
          <div className={styles.container__buttons} >
          <ColorPaletteButton setColor={setColor} />
          <div className={styles.div}>

          <button className={styles.button__summit} onClick={handleButtonClick}>Keep it! 
          </button>
          {errorInput && <p className={styles.error__button}>{errorInput}</p>}
          </div>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default CreateNote;