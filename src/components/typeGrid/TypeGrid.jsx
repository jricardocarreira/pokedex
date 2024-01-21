import { TypeButton } from "../typeButton/TypeButton"
import { typeGridStyle } from "./typeGrid.css"

export const TypeGrid = () => {
    return (
        <div className={typeGridStyle}>
            <TypeButton type="bug" />
            <TypeButton type="dark" />
            <TypeButton type="dragon" />
            <TypeButton type="electric" />
            <TypeButton type="fairy" />
            <TypeButton type="fighting" />
            <TypeButton type="fire" />
            <TypeButton type="flying" />
            <TypeButton type="ghost" />
            <TypeButton type="grass" />
            <TypeButton type="ground" />
            <TypeButton type="ice" />
            <TypeButton type="normal" />
            <TypeButton type="poison" />
            <TypeButton type="psychic" />
            <TypeButton type="rock" />
            <TypeButton type="steel" />
            <TypeButton type="water" />
{/*             <TypeButton type="bug" onClick={() => onTypeClick('bug')} />
            <TypeButton type="dark" onClick={() => onTypeClick('dark')} />
            <TypeButton type="dragon" onClick={() => onTypeClick('dragon')} />
            <TypeButton type="electric" onClick={() => onTypeClick('eletric')} />
            <TypeButton type="fairy" onClick={() => onTypeClick('fairy')} />
            <TypeButton type="fighting" onClick={() => onTypeClick('fighting')} />
            <TypeButton type="fire" onClick={() => onTypeClick('fire')} />
            <TypeButton type="flying" onClick={() => onTypeClick('flying')} />
            <TypeButton type="ghost" onClick={() => onTypeClick('ghost')} />
            <TypeButton type="grass" onClick={() => onTypeClick('grass')} />
            <TypeButton type="ground" onClick={() => onTypeClick('ground')} />
            <TypeButton type="ice" onClick={() => onTypeClick('ice')} />
            <TypeButton type="normal" onClick={() => onTypeClick('normal')} />
            <TypeButton type="poison" onClick={() => onTypeClick('poison')} />
            <TypeButton type="psychic" onClick={() => onTypeClick('psychic')} />
            <TypeButton type="rock" onClick={() => onTypeClick('rock')} />
            <TypeButton type="steel" onClick={() => onTypeClick('steel')} />
            <TypeButton type="water" onClick={() => onTypeClick('water')} /> */}
        </div>
    )
}