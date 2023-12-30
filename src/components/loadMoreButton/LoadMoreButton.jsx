import { loadMoreButtonStyle } from "./loadMoreButton.css"

export const LoadMoreButton = ({ onClick }) => {
    return <button className={loadMoreButtonStyle} onClick={onClick}>Load more Pokemon</button>
}