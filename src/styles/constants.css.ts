import { createGlobalTheme } from "@vanilla-extract/css";

const baseUnit = 4

export const vars = createGlobalTheme("#root", {
    space: {
        extraSmall: `${2 * baseUnit}px`,
        small: `${4 * baseUnit}px`,
        smallMedium: `${6 * baseUnit}px`,
        medium: `${8 * baseUnit}px`,
        mediumLarge: `${16 * baseUnit}px`,
        large: `${24 * baseUnit}px`,
    },
    fontSize: {
        small: `${4 * baseUnit}px`,
        medium: `${5 * baseUnit}px`,
        large: `${6 * baseUnit}px`,
    },
    colors: {
        lightBackground: "#fff",
        lightCardsBackground: "#F5F7FF",
        lightHover: "#e5e7ee",
        buttonBackground: "#FC800D",

        darkbackground: "#222",
        darkCardsBackground: "#333"
    },
    shadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)"
})