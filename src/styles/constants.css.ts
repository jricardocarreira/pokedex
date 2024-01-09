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
        extraSmall: `${3 * baseUnit}px`,
        small: `${4 * baseUnit}px`,
        medium: `${5 * baseUnit}px`,
        large: `${6 * baseUnit}px`,
    },
    colors: {
        lightBackground: "#fff",
        lightCardsBackground: "#f5f7ff",
        lightHover: "#e5e7ee",

        darkBackground: "#222",
        darkCardsBackground: "#333",
        darkHover: "#777",

        gray: "#999",
        buttonBackground: "#FC800D",

        bugType: '#729f3f',
        darkType: '#707070',
        dragonType1: '#53a4cf',
        dragonType2: '#f16e57',
        electricType: '#eed535',
        fairyType: '#fdb9e9',
        fightingType: '#d56723',
        fireType: '#fd7d24',
        flyingType1: '#3dc7ef',
        flyingType2: '#bdb9b8',
        ghostType: '#7b62a3',
        grassType: '#9bcc50',
        groundType1: '#f7de3f',
        groundType2: '#ab9842',
        iceType: '#51c4e7',
        normalType: '#a4acaf',
        poisonType: '#b97fc9',
        psychicType: '#f366b9',
        rockType: '#a38c21',
        steelType: '#9eb7b8',
        waterType: '#4592c4',
    },
    shadows: {
        default: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        hover: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
        active: "0px 1px 1px 0px rgba(0, 0, 0, 0.25)"
    }
})

export const themes = {
    light: {
      background: "#222",
      cardsBackground: "#222",
      hover: "#222",
    },
    dark: {
      background: "#bbb",
      cardsBackground: "#bbb",
      hover: "#bbb",
    },
  };

  export const themes2 = {
    light: {
      background: vars.colors.lightBackground,
      cardsBackground: vars.colors.lightCardsBackground,
      hover: vars.colors.lightHover,
    },
    dark: {
      background: vars.colors.darkBackground,
      cardsBackground: vars.colors.darkCardsBackground,
      hover: vars.colors.darkHover,
    },
  };