import { typeButtonStyle } from "./typeButton.css"

export const TypeButton = ({text}) => {
    return <button className={typeButtonStyle}>{text}</button>
}