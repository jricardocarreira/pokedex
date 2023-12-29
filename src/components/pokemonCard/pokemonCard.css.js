import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const pokemonCardStyle = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "236px",
    height: "307px",
    paddingBottom: vars.space.medium,
    backgroundColor: vars.colors.lightCardsBackground,
    borderRadius: "10px",
    boxShadow: vars.shadow
})

export const pokemonNameStyle = style({
    textAlign: "center",
    fontSize: vars.fontSize.large,
})

export const cardTypeContainerStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: vars.space.small
})

export const cardTypeStyle = style ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "86px",
    height: "24px",
    color: vars.colors.darkBackground,
    background: vars.colors.lightBackground,
    borderRadius: "3px",
})