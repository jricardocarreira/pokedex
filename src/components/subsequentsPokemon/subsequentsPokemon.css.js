import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const subsequentsPokemonStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    backgroundColor: themes.background,
    width: "100%",
    gap: vars.space.medium,
    flexWrap: "wrap"
})

export const subsequentsPokemonLinksStyle = style ({
    fontSize: vars.fontSize.medium,
    color: vars.colors.background,
    backgroundColor: vars.colors.buttonBackground,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${vars.space.extraSmall} ${vars.space.medium}`,
    gap: vars.space.extraSmall,
    borderRadius: "5px",
    boxShadow: vars.shadows.default,
    cursor: "pointer",
    transition: "box-shadow 0.3s, transform 0.3s",
    ":active": {
        transform: "scale(0.98)",
        boxShadow: vars.shadows.active,
    },
})