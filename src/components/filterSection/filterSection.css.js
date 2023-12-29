import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const filterSectionStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: vars.colors.lightBackground,
    width: "100%",
    padding: `${vars.space.medium} ${vars.space.large}`,
    gap: vars.space.medium,
    flexWrap: "wrap"
})