import { useState } from "react";
import { typeStyle } from "../../styles/type-style.css"
import { selectedTypeStyle, typeButtonStyle } from "./typeButton.css"

export const TypeButton = ({ type, onClick }) => {
    const [isSelected, setIsSelected] = useState(false);
  
    const handleClick = () => {
      setIsSelected((prev) => !prev);
      onClick(type);
    };
  
    return (
      <button
        className={`${typeButtonStyle} ${typeStyle} ${type} ${isSelected ? selectedTypeStyle : ''}`}
        onClick={handleClick}
      >{type}
      </button>
    )
  }