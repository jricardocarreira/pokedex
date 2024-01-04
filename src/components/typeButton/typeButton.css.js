import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const typeButtonStyle = style ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: vars.fontSize.medium,
    fontWeight: 400,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: '100%',
    height: vars.space.medium,
    borderRadius: "4px",
    border: "none",
    boxShadow: vars.shadows.default
})