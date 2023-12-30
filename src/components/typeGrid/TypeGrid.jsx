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
        </div>
    )
}