import { iconContainerStyle, imageFilterStyle } from "./iconContainer.css"

export const IconContainer = ({ src, alt }) => {
    return (
        <div className={iconContainerStyle}>
            <img src={src} alt={alt} className={imageFilterStyle} />
        </div>
    )
}