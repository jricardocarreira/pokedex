import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const headerStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: vars.space.mediumLarge,
    padding: `0 ${vars.space.large}`,
    backgroundColor: themes.cardsBackground,

    "@media (max-width: 768px)": {
        padding: `0 ${vars.space.medium}`,
    },
    "@media (max-width: 480px)": {
        padding: `0 ${vars.space.small}`,
    }
})

export const headingStyle = style ({
    fontSize: vars.fontSize.large,
    fontWeight: 700,
    color: themes.text,
    verticalAlign: "middle"
})