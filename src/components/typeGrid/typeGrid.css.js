import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const typeGridStyle = style ({
    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(57px, 114px))",
    gap: vars.space.small
})