import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const typeButtonStyle = style ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: vars.fontSize.medium,
    fontWeight: 400,
    color: vars.colors.darkCardsBackground,
    background: vars.colors.lightCardsBackground,
    width: "114px",
    height: vars.space.medium,
    borderRadius: "4px",
    border: "none",
    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)"
})