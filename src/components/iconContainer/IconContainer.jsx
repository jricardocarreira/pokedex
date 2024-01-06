import { iconContainerStyle } from "./iconContainer.css"

export const IconContainer = ({ src, alt }) => {
    return (
        <div className={iconContainerStyle}>
            <img src={src} alt={alt}/>
        </div>
    )
}