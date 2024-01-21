import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const loadingOrNotFoundTextStyle = style ({
    fontSize: vars.fontSize.large,
    color: themes.text
})