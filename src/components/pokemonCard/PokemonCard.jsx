import { pokemonCardStyle, pokemonNameStyle, cardTypeContainerStyle, cardTypeStyle, imageStyle } from './pokemonCard.css';

export const PokemonCard = ({ image, name, types }) => {
    return (
        <li className={pokemonCardStyle}>
            <img className={imageStyle} src={image} alt={name} />

            <p className={pokemonNameStyle}>{name}</p>

            <ul className={cardTypeContainerStyle}>
                {types.map((type, index) => (
                    <li key={index} className={cardTypeStyle}>
                        {type}
                    </li>
                ))}
            </ul>
        </li>
    );
};