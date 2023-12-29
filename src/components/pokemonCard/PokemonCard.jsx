import { cardTypeContainerStyle, cardTypeStyle, pokemonCardStyle, pokemonNameStyle } from "./pokemonCard.css"

export const PokemonCard = ({src, content, text}) => {
    return (
        <li className={pokemonCardStyle}>
            <img src="./src/images/bulbassaur.png"/>

            <p className={pokemonNameStyle}>Bulbassaur</p>

            <ul className={cardTypeContainerStyle}>
                <li className={cardTypeStyle}>grass</li>
                <li className={cardTypeStyle}>poison</li>
            </ul>
        </li>
    )
}