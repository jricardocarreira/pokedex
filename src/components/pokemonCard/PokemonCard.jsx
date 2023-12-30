import { Link } from 'react-router-dom';
import { typeStyle } from '../../styles/typeBackground.css.js';
import { pokemonCardStyle, pokemonNameStyle, cardTypeContainerStyle, cardTypeStyle, imageStyle } from './pokemonCard.css';

export const PokemonCard = ({ id, image, name, types }) => {
    return (
        <li>
            <Link to={`/pokemon/${id}`} className={pokemonCardStyle}>
                <img className={imageStyle} src={image} alt={name} />

                <p className={pokemonNameStyle}>{name}</p>

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
