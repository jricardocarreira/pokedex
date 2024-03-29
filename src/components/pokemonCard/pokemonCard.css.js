import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const pokemonCardStyle = style({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "307px",
    gap: vars.space.small,
    paddingBottom: vars.space.medium,
    backgroundColor: themes.cardsBackground,
    borderRadius: "10px",
    boxShadow: vars.shadows.default,
    transition: "box-shadow 0.3s, transform 0.3s",

    ":hover": {
        transform: "scale(1.05)",
        boxShadow: vars.shadows.hover,
    },
})

export const cardImageStyle = style({
    height: "192px",
    transition: "transform 0.2s",
    selectors: {
        [`${pokemonCardStyle}:hover &`]: {
            transform: "scale(1.2)",
        },
    },
})

export const cardPokemonNameStyle = style({
    fontSize: vars.fontSize.medium,
    textTransform: "capitalize",
    color: themes.text,
})

export const cardPokemonIdStyle = style ({
    fontSize: vars.fontSize.small,
    textTransform: "none",
    color: vars.colors.gray,
})

export const cardTypeContainerStyle = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: `0 ${vars.space.smallMedium}`,
    gap: vars.space.small
})

export const cardTypeStyle = style({
    fontSize: vars.fontSize.small,
    width: "45.75%",
    height: vars.space.smallMedium,
    borderRadius: "3px",
})