import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const pokemonMainSectionStyle = style ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    minHeight: "81vh",
    padding: `${vars.space.medium} ${vars.space.large}`,
    gap: vars.space.medium,
    backgroundColor: themes.background
})