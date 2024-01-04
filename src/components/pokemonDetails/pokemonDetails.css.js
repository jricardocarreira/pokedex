import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const pokemonDetaisStyle = style ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "80vh",
    gap: vars.space.small,
    paddingBottom: vars.space.medium,
    backgroundColor: vars.colors.lightCardsBackground,
    borderRadius: "10px",
    boxShadow: vars.shadows.default,
})

export const mainPokemonDetailsStyle = style ({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "column",
    width: "50%",
    height: "100%",
    gap: vars.space.small,
})

export const detailsImageStyle = style ({
    flexGrow: 1
})

export const detailsTypeContainerStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: vars.space.small
})

export const detailsTypeStyle = style ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: vars.fontSize.large,
    width: "86px",
    height: "36px",
    color: vars.colors.darkBackground,
    borderRadius: "3px",
})
