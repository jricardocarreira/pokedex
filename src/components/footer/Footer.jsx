import { IconContainer } from "../iconContainer/IconContainer"
import { footerStyle, madeByCreatorStyle, socialNavStyle } from "./footer.css"

export const Footer = () => {
    return (
        <footer className={footerStyle}>
            <nav className={socialNavStyle}>
                <a href="https://github.com/jricardocarreira/pokedex" target="_blank">
                    <IconContainer src="/src/icons/github-20.svg" alt="Go to GitHub Repository" />
                </a>
                <a href="https://www.linkedin.com/in/jricardocarreira/" target="_blank">
                    <IconContainer src="/src/icons/linkedin-20.svg" alt="Go to my LinkedIn" />
                </a>
                <a href="https://www.instagram.com/jricardocarreira/" target="_blank">
                    <IconContainer src="/src/icons/instagram-20.svg" alt="Go to my Instagram" />
                </a>
            </nav>
            <div>
                <p className={madeByCreatorStyle}>Design and development by José Ricardo Carreira 'Bug'</p>
            </div>
        </footer>
    )
}