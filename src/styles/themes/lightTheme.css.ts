import { createTheme } from "@vanilla-extract/css";
import { themes } from "./contract.css";
import { vars } from "../constants.css";

export const lightTheme = createTheme(themes, {
    background: vars.colors.background,
    cardsBackground: vars.colors.cards,
    hover: vars.colors.hover,
    text: vars.colors.darkCards
})