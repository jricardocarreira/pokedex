import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const typeFilterStyle = style ({
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: vars.space.small
})