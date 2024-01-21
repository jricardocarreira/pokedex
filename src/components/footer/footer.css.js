import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const footerStyle = style ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: vars.space.large,
    padding: `0 ${vars.space.large}`,
    backgroundColor: vars.colors.background,
    gap: vars.space.extraSmall
})

export const socialNavStyle = style ({
    display: "flex",
    gap: vars.space.extraSmall
})

export const madeByCreatorStyle = style ({
    fontSize: vars.fontSize.small,
    color: vars.colors.darkCards,
})