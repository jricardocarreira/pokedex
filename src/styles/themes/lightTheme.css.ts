import { createTheme } from "@vanilla-extract/css";
import { vars } from "../constants.css";
import { themes } from "./contract.css";

export const lightTheme = createTheme(themes, {
    background: vars.colors.background,
    cardsBackground: vars.colors.cards,
    hover: vars.colors.hover,
    text: vars.colors.darkCards,
    filter: vars.filters.invert
})