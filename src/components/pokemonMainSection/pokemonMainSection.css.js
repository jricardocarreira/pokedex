import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const pokemonMainSectionStyle = style ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    maxWidth: "1920px",
    padding: `${vars.space.medium} ${vars.space.large}`,
    gap: vars.space.medium,
    backgroundColor: themes.background,

    "@media (max-width: 768px)": {
        padding: `${vars.space.medium} ${vars.space.medium}`,
    },
    "@media (max-width: 480px)": {
        padding: `${vars.space.medium} ${vars.space.small}`,
    }
})