import { IconContainer } from "../iconContainer/IconContainer"
import { themeTogglerButtonStyle } from "./themeTogglerButton.css"

export const ThemeTogglerButton = () => {
    return (
        <button className={themeTogglerButtonStyle}>
            <IconContainer src="/src/icons/dark-icon.svg" alt="Set to dark mode icon" />
        </button>
    )
}