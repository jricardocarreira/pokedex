import { TextSearcher } from "../textSearcher/TextSearcher"
import { TypeFilter } from "../typeFilter/TypeFilter"
import { filterSectionStyle } from "./filterSection.css"

export const FilterSection = () => {
    return (
        <div className={filterSectionStyle}>
            <TextSearcher />
            <TypeFilter />
        </div>
    )
}