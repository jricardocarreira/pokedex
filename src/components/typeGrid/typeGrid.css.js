import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const typeGridStyle = style ({
    display: "grid",
    flexGrow: 1,
    gridTemplateColumns: "repeat(6, minmax(76px, 1fr))",
    gap: vars.space.small,
    "@media (max-width: 732px)": {
        gridTemplateColumns: "repeat(3, minmax(76px, 1fr))"
    }
})