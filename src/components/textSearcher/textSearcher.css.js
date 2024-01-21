import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const textSearcherStyle = style ({
    display: "flex",
    flexGrow: 1,
    gap: vars.space.small
})

export const textInputStyle = style ({
    flexGrow: 1,
    fontSize: vars.fontSize.medium,
    color: themes.text,
    background: themes.cardsBackground,
    height: "48px",
    padding: `0 ${vars.space.small}`,
    borderRadius: "10px",
    border: "none",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

    "::placeholder": {
        color: themes.hover,
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
    cursor: "pointer",

    boxShadow: vars.shadows.default,
    transition: "box-shadow 0.3s, transform 0.3s",
    ":active": {
        transform: "scale(0.98)",
        boxShadow: vars.shadows.active,
    },
})