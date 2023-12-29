import { TextSearcher } from "../textSearcher/TextSearcher"
import { TypeGrid } from "../typeGrid/TypeGrid"
import { filterSectionStyle } from "./filterSection.css"

export const FilterSection = () => {
    return (
        <div className={filterSectionStyle}>
            <TextSearcher />
            <TypeGrid />
        </div>
    )
}