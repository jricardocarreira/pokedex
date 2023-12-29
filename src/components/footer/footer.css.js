import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const footerStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: vars.space.mediumLarge,
    padding: `0 ${vars.space.large}`,
    backgroundColor: vars.colors.lightBackground,
})