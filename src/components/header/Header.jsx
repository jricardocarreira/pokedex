import { Link } from "react-router-dom"
import { IconContainer } from "../iconContainer/IconContainer"
import { headerStyle, headingStyle, themeToggleButton } from "./header.css"

export const Header = () => {
    return (
        <header className={headerStyle}>
            <Link to={'/'}>
                <h1 className={headingStyle}>POKEDEX</h1>
            </Link>

            <div className={themeToggleButton}>
                <IconContainer src="/src/icons/dark-icon.svg" alt="Set to dark mode icon"/>
            </div>
        </header>
    )
}