import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const PokemonCardGridStyle = style ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(236px, 1fr))",
    width: "100%",
    gap: vars.space.small
})