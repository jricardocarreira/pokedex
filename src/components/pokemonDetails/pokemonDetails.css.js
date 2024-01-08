import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const pokemonDetaisStyle = style ({
    display: "flex",
    width: "100%",
    minHeight: "540px",
    paddingBottom: vars.space.mediumLarge,
    backgroundColor: vars.colors.lightCardsBackground,
    borderRadius: "10px",
    boxShadow: vars.shadows.default,
})

export const mainPokemonDetailsContainerStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "55%",
    height: "100%",
    paddingTop: vars.space.medium,
    gap: vars.space.extraSmall
})

export const detailsImageStyle = style ({
    flexGrow: 1,
    width: "55%"
})

export const pokemonNameTypesContainerStyle = style ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: vars.space.medium,
})

export const detailsPokemonTextStyle = style ({
    fontSize: vars.fontSize.large,
    textTransform: "capitalize",
    color: vars.colors.darkCardsBackground,
})

export const pokemonIdStyle = style({
    fontSize: vars.fontSize.medium,
    textTransform: "none",
    color: vars.colors.gray,
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

export const pokemonMovesAbilitiesContainerStyle = style ({
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "45%",
    height: "100%",
    padding: `${vars.space.mediumLarge} ${vars.space.mediumLarge} 0 0`,
    gap: vars.space.medium,
})

export const pokemonMovesStyle = style ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: vars.space.small
})

export const movesListStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: vars.space.extraSmall
})

export const movesListItemsStyle = style ({
    fontSize: vars.fontSize.medium,
    textTransform: "capitalize",
    color: vars.colors.darkCardsBackground,
    width: "170px",
    flexGrow: 1
})

export const pokemonAbilitiesStyle = style ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: vars.space.small
})

export const abilitiesListStyle = style ({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.small
})

export const abilitiesListItemsStyle = style ({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.extraSmall
})

export const abilityNameButtonContainerStyle = style ({
    display: "flex",
    alignItems: "center",
    gap: vars.space.extraSmall
})

export const abilityNameStyle = style ({
    fontSize: vars.fontSize.medium,
    textTransform: "capitalize",
    color: vars.colors.darkCardsBackground,
})

export const abilityButtonStyle = style ({
    width: vars.space.small,
    height: vars.space.small,
    fontSize: vars.fontSize.extraSmall,
    backgroundColor: vars.colors.lightHover,
    color: vars.colors.darkCardsBackground,
    border: "none",
    borderRadius: "50%"
})

export const abilityDescriptionStyle = style ({
    fontSize: vars.fontSize.small,
    textTransform: "none",
    color: vars.colors.darkCardsBackground,
})

