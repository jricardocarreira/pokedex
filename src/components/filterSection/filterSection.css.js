import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";

export const filterSectionStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "192px",
    padding: `0 ${vars.space.large}`,
    backgroundColor: vars.colors.lightBackground,
})