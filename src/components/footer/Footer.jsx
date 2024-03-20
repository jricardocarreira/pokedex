import { IconContainer } from "../iconContainer/IconContainer"
import { bugAnchorStyle, footerStyle, madeByCreatorStyle, socialNavStyle } from "./footer.css"

export const Footer = () => {
    return (
        <footer className={footerStyle}>
            <nav className={socialNavStyle}>
                <a href="https://github.com/jricardocarreira/pokedex" target="_blank">
                    <IconContainer src="/github-20.svg" alt="Go to GitHub Repository" />
                </a>
                <a href="https://www.linkedin.com/in/jricardocarreira/" target="_blank">
                    <IconContainer src="/linkedin-20.svg" alt="Go to my LinkedIn" />
                </a>
                <a href="https://www.instagram.com/bug063/" target="_blank">
                    <IconContainer src="/instagram-20.svg" alt="Go to my Instagram" />
                </a>
            </nav>
            <div>
                <p className={madeByCreatorStyle}>Design and development by José Ricardo Carreira
                    <a href="https://www.instagram.com/bug063/" target="_blank" className={bugAnchorStyle}> 'Bug'</a>
                </p>
            </div>
        </footer>
    )
}