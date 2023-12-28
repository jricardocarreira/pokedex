import { IconContainer } from "../iconContainer/IconContainer"
import { headerStyle, headingStyle, navStyle } from "./header.css"

export const Header = () => {
    return (
        <header className={headerStyle}>
            <h1 className={headingStyle}>POKEDEX</h1>

            <nav className={navStyle}>
                <IconContainer src="./src/icons/dark-icon.svg"/>
                <IconContainer src="./src/icons/github-20.svg"/>
            </nav>
        </header>
    )
}