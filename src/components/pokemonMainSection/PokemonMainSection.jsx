import { pokemonMainSectionStyle } from "./pokemonMainSection.css"

export const PokemonMainSection = ({ children }) => {
    return (
        <div className={pokemonMainSectionStyle}>
            {children}
        </div>
    )
}