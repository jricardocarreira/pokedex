import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const PokemonCardGridStyle = style ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: vars.space.small
})