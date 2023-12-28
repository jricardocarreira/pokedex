import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const textSearcherStyle = style ({
    display: "flex",
    gap: vars.space.small
})

export const textInputStyle = style ({
    fontSize: vars.fontSize.large,
    fontWeight: 400,
    color: vars.colors.darkCardsBackground,
    background: vars.colors.lightCardsBackground,
    width: "372px",
    height: "50px",
    padding: `0 ${vars.space.small}`,
    borderRadius: "10px",
    border: "none",

    "::placeholder": {
        color: "#D5D7DD",
        overflow: "visible",
    }
})

export const searchButtonStyle = style ({
    backgroundColor: vars.colors.buttonBackground,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    borderRadius: "10px",
    border: "none",
    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)"

})