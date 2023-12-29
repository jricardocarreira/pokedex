import { IconContainer } from "../iconContainer/IconContainer"
import { headerStyle, headingContainerStyle, headingStyle, navStyle } from "./header.css"

export const Header = () => {
    return (
        <header className={headerStyle}>
            <div className={headingContainerStyle}>
                <h1 className={headingStyle}>POKEDEX</h1>
            </div>

            <nav className={navStyle}>
                <IconContainer src="./src/icons/dark-icon.svg" />
                <IconContainer src="./src/icons/github-20.svg" />
            </nav>
        </header>
    )
}