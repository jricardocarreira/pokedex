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
    background: "#fff",
    cards: "#f5f7ff",
    hover: "#e5e7ee",

    darkBackground: "#222",
    darkCards: "#333",
    darkHover: "#444",

    gray: "#888",
    buttonBackground: "#FC800D",

    bugType: '#91C12E',
    darkType: '#5A5465',
    dragonType: '#0A6CC3',
    electricType: '#F3D23B',
    fairyType: '#EC8EE6',
    fightingType: '#CD416A',
    fireType: '#FE9D55',
    flyingType: '#8FA9DE',
    ghostType: '#5268AD',
    grassType: '#62BC5A',
    groundType: '#D97845',
    iceType: '#72CEC0',
    normalType: '#919AA2',
    poisonType: '#AA6BC8',
    psychicType: '#FA7179',
    rockType: '#C5B68C',
    steelType: '#5A8EA2',
    waterType: '#4F8FD5',
  },
  shadows: {
    default: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
    hover: "0px 8px 8px 0px rgba(0, 0, 0, 0.3)",
    active: "0px 0.5px 0.5px 0px rgba(0, 0, 0, 0.3)"
  },
  filters: {
    invert: "invert(80%)"
  }
})