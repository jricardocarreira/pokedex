import { TypeButton } from "../typeButton/TypeButton"
import { typeGridStyle } from "./typeGrid.css"

export const TypeGrid = ({ onTypeClick }) => {

    const types = [
        "fighting", "psychic", "poison", "dragon", "ghost", "dark", "ground",
        "fire", "fairy", "water", "flying", "normal", "rock", "electric",
        "bug", "grass", "ice", "steel"
    ]

    return (
        <div className={typeGridStyle}>
            {types.map(type => (
                <TypeButton key={type} type={type} onClick={() => onTypeClick(type)} />
            ))}
        </div>
    )
}