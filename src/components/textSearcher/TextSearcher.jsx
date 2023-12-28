import { searchButtonStyle, textInputStyle, textSearcherStyle } from "./textSearcher.css"

export const TextSearcher = () => {
    return (
        <div className={textSearcherStyle}>
            <input placeholder="Search for name or id number..." className={textInputStyle}></input>

            <button /* src="./src/icons/search-icon.svg" */ className={searchButtonStyle}></button>
        </div>
    )
}