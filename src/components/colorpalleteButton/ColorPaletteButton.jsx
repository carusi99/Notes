
import { useState } from "react";
import iconPalette from "../../assets/icons/palette.svg";
import styles from "./colorpalette.module.css";

const ColorPaletteButton = ({setColor, onUpdateColor, id}) => {
      const [showPalette, setShowPalette] = useState(false)
      const togglePalette = () => {
        setShowPalette(!showPalette)
      }
      const handleColorClick = async (selectedColor) => {
        try {
          setColor(selectedColor);
          setShowPalette(false);
          onUpdateColor && await onUpdateColor(id, selectedColor);
        } catch (error) {
          console.error('Error al actualizar el color:', error);
        }
      }

  const colors = [
    "#ffffff",
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
  ];

  return (
    <div className={styles.palette__container}>
      <button className={styles.btn__actions} onClick={togglePalette}>
        <img src={iconPalette} alt="Color Palette" width="30px" />
      </button>
      {showPalette && (
        <div className={styles.color__palette__tooltip}>
          {colors.map(color => {
            return <div
              key={color}
              className={styles.color__option}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          })}
        </div>
      )}
    </div>
  );
};

export default ColorPaletteButton;
