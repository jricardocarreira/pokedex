import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const pokemonDetaisContainer = style ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
})

export const pokemonDetaisStyle = style ({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "86.7%",
    height: "307px",
    gap: vars.space.small,
    paddingBottom: vars.space.medium,
    backgroundColor: vars.colors.lightCardsBackground,
    borderRadius: "10px",
    boxShadow: vars.shadows.default,
})