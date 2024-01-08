import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const typeButtonStyle = style ({
    fontSize: vars.fontSize.medium,
    width: '100%',
    height: vars.space.medium,
    borderRadius: "4px",
    border: "none",
    boxShadow: vars.shadows.default,
    transition: "0.2s",
    ":active": {
        transform: "scale(0.98)",
        boxShadow: vars.shadows.active,
    },
})