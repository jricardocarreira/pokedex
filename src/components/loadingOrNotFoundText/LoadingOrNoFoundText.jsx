import { loadingOrNotFoundTextStyle } from "./loadingOrNotFoundText.css";

export const LoadingOrNotFoundText = ({ children }) => <p className={loadingOrNotFoundTextStyle}>{children}</p>