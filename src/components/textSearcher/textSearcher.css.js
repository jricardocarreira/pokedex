import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const textSearcherStyle = style ({
    display: "flex"

})

export const textInputStyle = style ({
    fontSize: vars.fontSize.large,
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
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    widht: "50px",
    height: "50px",
    borderRadius: "10px",
    border: "none"
})