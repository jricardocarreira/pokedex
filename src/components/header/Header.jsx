import { Link } from "react-router-dom"
import { headerStyle, headingStyle } from "./header.css"
import { ThemeTogglerButton } from "../themeTogglerButton/ThemeTogglerButton"

export const Header = ({ onToggleTheme }) => {
    return (
        <header className={headerStyle}>
            <Link to={'/'}>
                <h1 className={headingStyle}>POKEDEX</h1>
            </Link>

            <ThemeTogglerButton onToggleTheme={onToggleTheme}/>
        </header>
    )
}