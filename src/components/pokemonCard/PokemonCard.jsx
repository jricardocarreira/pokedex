import { Link } from 'react-router-dom';
import { typeStyle } from '../../styles/typeBackground.css.js';
import { pokemonCardStyle, cardTypeContainerStyle, cardTypeStyle, cardImageStyle, cardPokemonNameStyle, cardPokemonIdStyle } from './pokemonCard.css';

export const PokemonCard = ({ id, image, name, types }) => {
    return (
        <li>
            <Link to={`/pokemon/${id}`} className={pokemonCardStyle}>
                <img className={cardImageStyle} src={image} alt={name} />

                <p className={cardPokemonNameStyle}>
                    {name} <span className={cardPokemonIdStyle}>{`nº ${id.toString().padStart(4, '0')}`}</span>
                </p>

                <ul className={cardTypeContainerStyle}>
                    {types.map((type, index) => (
                        <li key={index} className={`${cardTypeStyle} ${typeStyle} ${type}`}>
                            {type}
                        </li>
                    ))}
                </ul>
            </Link>
        </li>
    )
}
