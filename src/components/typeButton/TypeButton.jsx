import { typeButtonStyle } from "./typeButton.css"

export const TypeButton = ({content}) => {
    return <button className={typeButtonStyle}>{content}</button>
}