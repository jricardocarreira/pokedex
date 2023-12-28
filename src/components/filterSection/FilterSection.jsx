import { TextSearcher } from "../textSearcher/TextSearcher"
import { filterSectionStyle } from "./filterSection.css"

export const FilterSection = () => {
    return (
        <div className={filterSectionStyle}>
            <TextSearcher />
        </div>
    )
}