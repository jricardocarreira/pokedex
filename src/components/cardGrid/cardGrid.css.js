import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const cardGridStyle = style ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: vars.space.small
})