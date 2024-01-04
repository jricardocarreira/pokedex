import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const pokemonMainSectionStyle = style ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    padding: `${vars.space.medium} ${vars.space.large}`,
    gap: vars.space.medium,
})