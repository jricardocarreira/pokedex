import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const loadMoreButtonStyle = style({
    fontSize: vars.fontSize.large,
    fontWeight: 700,
    color: vars.colors.background,
    backgroundColor: vars.colors.buttonBackground,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "350px",
    height: "48px",
    borderRadius: "10px",
    border: "none",
    boxShadow: vars.shadows.default,
    cursor: "pointer",
    transition: "box-shadow 0.3s, transform 0.3s",
    ":active": {
        transform: "scale(0.98)",
        boxShadow: vars.shadows.active,
    },
})