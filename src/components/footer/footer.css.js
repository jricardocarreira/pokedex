import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const footerStyle = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: vars.space.large,
    padding: `0 ${vars.space.large}`,
    backgroundColor: themes.cardsBackground,
    gap: vars.space.extraSmall
})

export const socialNavStyle = style({
    display: "flex",
    gap: vars.space.extraSmall
})

export const madeByCreatorStyle = style({
    fontSize: vars.fontSize.small,
    color: themes.text,
})

export const bugAnchorStyle = style({
    color: themes.text,
    cursor: "help",
})