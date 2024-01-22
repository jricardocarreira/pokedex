import { TextSearcher } from "../textSearcher/TextSearcher"
import { TypeGrid } from "../typeGrid/TypeGrid"
import { filterSectionStyle } from "./filterSection.css"

export const FilterSection = ({ onSearch, onTypeClick }) => {
    return (
        <div className={filterSectionStyle}>
            <TextSearcher onSearch={onSearch}/>
            <TypeGrid onTypeClick={onTypeClick}/>
        </div>
    )
}