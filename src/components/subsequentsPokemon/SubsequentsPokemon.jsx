import { Link } from "react-router-dom"
import { subsequentsPokemonLinksStyle, subsequentsPokemonStyle } from "./subsequentsPokemon.css"

export const SubsequentsPokemon = ({ id }) => {
    return (
        <nav className={subsequentsPokemonStyle}>
            {id > 1 && <Link to={`/pokemon/${id - 1}`} className={subsequentsPokemonLinksStyle} >Previous Pokemon</Link>}
            <Link to={`/pokemon/${+id + 1}`} className={subsequentsPokemonLinksStyle} >Next Pokemon</Link>
        </nav>
    )
}