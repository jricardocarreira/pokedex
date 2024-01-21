import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/constants.css";
import { themes } from "../../styles/themes/contract.css";

export const iconContainerStyle = style ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: vars.space.medium,
    height: vars.space.medium,
    borderRadius: "50%",
    transition: "0.3s",
    cursor: "pointer",
    ":hover": {
        backgroundColor: themes.hover
    },
})