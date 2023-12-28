import { iconContainerStyle } from "./iconContainer.css"

export const IconContainer = ({src}) => {
    return (
        <div className={iconContainerStyle}>
            <img src={src}/>
        </div>
    )
}