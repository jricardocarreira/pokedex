import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const SubsequentsPokemonStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    padding: `0 ${vars.space.large} ${vars.space.medium}`,
    gap: vars.space.medium,
    backgroundColor: themes.background
})