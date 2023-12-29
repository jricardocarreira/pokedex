import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const textSearcherStyle = style ({
    display: "flex",
    flexGrow: 1,
    gap: vars.space.small
})

export const textInputStyle = style ({
    flexGrow: 1,
    fontSize: vars.fontSize.medium,
    fontWeight: 400,
    color: vars.colors.darkCardsBackground,
    background: vars.colors.lightCardsBackground,
    height: "48px",
    padding: `0 ${vars.space.small}`,
    borderRadius: "10px",
    border: "none",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

    "::placeholder": {
        color: "#D5D7DD",
    }
})

export const searchButtonStyle = style ({
    backgroundColor: vars.colors.buttonBackground,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "48px",
    height: "48px",
    borderRadius: "10px",
    border: "none",
    boxShadow: vars.shadows.default

})