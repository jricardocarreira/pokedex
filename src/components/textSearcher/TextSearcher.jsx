import { searchButtonStyle, textInputStyle, textSearcherStyle } from "./textSearcher.css"

export const TextSearcher = () => {
    return (
        <div className={textSearcherStyle}>
            <input placeholder="Search name or id number..." className={textInputStyle}></input>

            <button className={searchButtonStyle}>
                <img src="/src/icons/search-icon.svg" alt="Click to search icon"/>
            </button>
        </div>
    )
}