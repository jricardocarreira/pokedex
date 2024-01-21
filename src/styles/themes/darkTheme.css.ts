import { createTheme } from "@vanilla-extract/css";
import { themes } from "./contract.css";
import { vars } from "../constants.css";

export const darkTheme = createTheme(themes, {
    background: vars.colors.darkBackground,
    cardsBackground: vars.colors.darkCards,
    hover: vars.colors.darkHover,
    text: vars.colors.cards
})