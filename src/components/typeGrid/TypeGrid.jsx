import { TypeButton } from "../typeButton/TypeButton"
import { typeGridStyle } from "./typeGrid.css"

export const TypeGrid = ({ onTypeClick }) => {
    return (
        <div className={typeGridStyle}>

            <TypeButton type="fighting" onClick={() => onTypeClick('fighting')} />
            <TypeButton type="psychic" onClick={() => onTypeClick('psychic')} />
            <TypeButton type="poison" onClick={() => onTypeClick('poison')} />
            <TypeButton type="dragon" onClick={() => onTypeClick('dragon')} />
            <TypeButton type="ghost" onClick={() => onTypeClick('ghost')} />
            <TypeButton type="dark" onClick={() => onTypeClick('dark')} />
            <TypeButton type="ground" onClick={() => onTypeClick('ground')} />
            <TypeButton type="fire" onClick={() => onTypeClick('fire')} />
            <TypeButton type="fairy" onClick={() => onTypeClick('fairy')} />
            <TypeButton type="water" onClick={() => onTypeClick('water')} />
            <TypeButton type="flying" onClick={() => onTypeClick('flying')} />
            <TypeButton type="normal" onClick={() => onTypeClick('normal')} />
            <TypeButton type="rock" onClick={() => onTypeClick('rock')} />
            <TypeButton type="electric" onClick={() => onTypeClick('electric')} />
            <TypeButton type="bug" onClick={() => onTypeClick('bug')} />
            <TypeButton type="grass" onClick={() => onTypeClick('grass')} />
            <TypeButton type="ice" onClick={() => onTypeClick('ice')} />
            <TypeButton type="steel" onClick={() => onTypeClick('steel')} />

        </div>
    )
}