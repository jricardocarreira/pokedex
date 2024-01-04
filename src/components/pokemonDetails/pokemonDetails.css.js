import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const pokemonDetaisStyle = style ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "80vh",
    gap: vars.space.small,
    paddingBottom: vars.space.mediumLarge,
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
    gap: vars.space.medium,
})

export const detailsImageStyle = style ({
    flexGrow: 1
})

export const detailsPokemonNameStyle = style ({
    fontSize: vars.fontSize.large,
    textTransform: "capitalize",
    color: vars.colors.darkCardsBackground,
})

export const detailsTypeContainerStyle = style ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: vars.space.smallMedium
})

export const detailsTypeStyle = style ({
    fontSize: vars.fontSize.medium,
    width: "20%",
    height: vars.space.medium,
    borderRadius: "4px",
})
