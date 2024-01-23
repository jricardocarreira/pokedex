import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const filterSectionStyle = style ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: themes.background,
    width: "100%",
    gap: vars.space.medium,
    flexWrap: "wrap"
})