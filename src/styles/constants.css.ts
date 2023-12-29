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
    shadows: {
        default: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        click: "0px 1px 1px 0px rgba(0, 0, 0, 0.25)"
    },
    typeColors: {
        bug: '#729f3f',
        dark: '#707070',
        dragon1: '#53a4cf',
        dragon2: '#f16e57',
        electric: '#eed535',
        fairy: '#fdb9e9',
        fighting: '#d56723',
        fire: '#fd7d24',
        flying1: '#3dc7ef',
        flying2: '#bdb9b8',
        ghost: '#7b62a3',
        grass: '#9bcc50',
        ground1: '#f7de3f',
        ground2: '#ab9842',
        ice: '#51c4e7',
        normal: '#a4acaf',
        poison: '#b97fc9',
        psychic: '#f366b9',
        rock: '#a38c21',
        steel: '#9eb7b8',
        water: '#4592c4',
    }
})