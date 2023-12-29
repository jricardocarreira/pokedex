import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const pokemonSectionStyle = style ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: `0 ${vars.space.large} ${vars.space.mediumLarge}`,
    gap: vars.space.medium
})