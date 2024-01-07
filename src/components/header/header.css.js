import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const headerStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: vars.space.mediumLarge,
    padding: `0 ${vars.space.large}`,
    backgroundColor: vars.colors.lightCardsBackground,
})

export const headingStyle = style ({
    fontSize: vars.fontSize.large,
    fontWeight: 700,
    color: vars.colors.darkCardsBackground,
    verticalAlign: "middle"
})

export const navStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: vars.space.extraSmall
})