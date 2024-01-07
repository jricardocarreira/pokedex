import { IconContainer } from "../iconContainer/IconContainer"
import { footerStyle, madeByCreatorStyle, socialNavStyle } from "./footer.css"

export const Footer = () => {
    return (
        <footer className={footerStyle}>
            <nav className={socialNavStyle}>
                <IconContainer src="/src/icons/github-20.svg" alt="My GitHub" />
                <IconContainer src="/src/icons/linkedin-20.svg" alt="My LinkedIn"/>
                <IconContainer src="/src/icons/instagram-20.svg" alt="My Instagram"/>
            </nav>
            <div>
                <p className={madeByCreatorStyle}>Design and development by José Ricardo Carreira 'Bug'</p>
            </div>
        </footer>
    )
}