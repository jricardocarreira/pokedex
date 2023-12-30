import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const pokemonCardStyle = style({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "column",
    width: "236px",
    height: "307px",
    gap: vars.space.small,
    paddingBottom: vars.space.medium,
    backgroundColor: vars.colors.lightCardsBackground,
    borderRadius: "10px",
    boxShadow: vars.shadows.default,
    transition: "0.3s",
    ":hover": {
        transform: "scale(1.05)",
        boxShadow: vars.shadows.hover,
    },
})

export const imageStyle = style({
    height: "192px",
    transition: "transform 0.2s",
    selectors: {
        [`${pokemonCardStyle}:hover &`]: {
            transform: "scale(1.2)",
        },
    },
})

export const pokemonNameStyle = style({
    textAlign: "center",
    fontSize: vars.fontSize.large,
    textTransform: "capitalize",
    color: vars.colors.darkCardsBackground,
})

export const cardTypeContainerStyle = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: vars.space.small
})

export const cardTypeStyle = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: vars.fontSize.small,
    width: "86px",
    height: "24px",
    color: vars.colors.darkBackground,
    borderRadius: "3px",
})