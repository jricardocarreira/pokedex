import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const pokemonDetaisStyle = style ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "307px",
    gap: vars.space.small,
    paddingBottom: vars.space.medium,
    backgroundColor: vars.colors.lightCardsBackground,
    borderRadius: "10px",
    boxShadow: vars.shadows.default,
})
