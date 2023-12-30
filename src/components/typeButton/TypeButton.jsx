import { typeStyle } from "../../styles/typeBackground.css"
import { typeButtonStyle } from "./typeButton.css"

export const TypeButton = ({type}) => {
    return <button className={`${typeButtonStyle} ${typeStyle} ${type}`}>{type}</button>
}