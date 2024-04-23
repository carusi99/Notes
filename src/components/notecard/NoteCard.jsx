import { useState } from "react";
import iconPinned from "../../assets/icons/pinned.svg";
import iconUnpinned from "../../assets/icons/unpinned.svg";
import iconTrash from "../../assets/icons/trash.svg";
import iconRestore from "../../assets/icons/restore.svg";
import iconEdit from "../../assets/icons/edit.svg";
import iconCheck from "../../assets/icons/check.svg";
import styles from "./notecard.module.css";
import ColorPaletteButton from "../colorpalleteButton/ColorPaletteButton";

const NoteCard = ({
  id,
  title,
  body,
  color,
  onUpdateColor,
  onNoteUpdate,
  pinned,
  deleted,
  onNoteDelete
}) => {
  const [noteColor, setNoteColor] = useState(color);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(body);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleBodyChange = (e) => {
    setEditedBody(e.target.value);
  };
  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };
  const handleCheckClick = async (updates) => {
    await onNoteUpdate(id, updates);
    setIsEditing(false);
  };

  return (
    <div
      key={id}
      className={styles.note__card}
      style={{ background: noteColor }}
    >
      <div>
        {isEditing ? (
          <textarea
            className={styles.note__body}
            value={editedTitle}
            onChange={handleTitleChange}
          />
        ) : (
          <h3 className={styles.note__tittle}>{title}</h3>
        )}

        {isEditing ? (
          <textarea
            className={styles.note__body}
            value={editedBody}
            onChange={handleBodyChange}
          />
        ) : (
          <p className={styles.note__body}>{body}</p>
        )}
      </div>

      <div className={styles.note__actions}>
        <ColorPaletteButton
          setColor={setNoteColor}
          onUpdateColor={onUpdateColor}
          id={id}
        />
        <button
          className={styles.btn__actions}
          onClick={() =>
            !isEditing
              ? setIsEditing(true)
              : handleCheckClick({ title: editedTitle, body: editedBody })
          }
        >
          <img
            src={isEditing ? iconCheck : iconEdit}
            alt={isEditing ? "Check" : "Edit"}
            width="30px"
          />
        </button>
        <button className={styles.btn__actions}>
          <img
            src={iconTrash}
            onClick={() => deleted ? onNoteDelete(id) : handleCheckClick({ deleted: true, pinned: false })}
            alt="Delete"
            width="30px"
          />
        </button>
        {deleted && (
          <button className={styles.btn__actions}>
            <img
              src={iconRestore}
              onClick={() =>
                handleCheckClick({ deleted: false, pinned: false })
              }
              alt="Restore"
              width="30px"
            />
          </button>
        )}
      </div>
      {!deleted && <button
        className={styles.btn__actions}
        id={styles.id}
        onClick={() =>
          handleCheckClick(
            pinned
              ? { pinned: false, deleted: false }
              : { pinned: true, deleted: false }
          )
        }
      >
        <img
          src={pinned ? iconPinned : iconUnpinned}
          alt="Pinned"
          width="30px"
        />
      </button>}
    </div>
  );
};

export default NoteCard;
