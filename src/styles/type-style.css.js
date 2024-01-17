import { style } from "@vanilla-extract/css";
import { vars } from "./constants.css";

export const typeStyle = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    selectors: {
        '.bug&': {
            backgroundColor: vars.colors.bugType,
            color: vars.colors.background
        },
        '.dark&': {
            backgroundColor: vars.colors.darkType,
            color: vars.colors.background
        },
        '.dragon&': {
            background: `linear-gradient(180deg, ${vars.colors.dragonType1} 50%, ${vars.colors.dragonType2} 50%)`,
            color: vars.colors.background
        },
        '.electric&': {
            backgroundColor: vars.colors.electricType,
            color: vars.colors.darkBackground
        },
        '.fairy&': {
            backgroundColor: vars.colors.fairyType,
            color: vars.colors.darkBackground
        },
        '.fighting&': {
            backgroundColor: vars.colors.fightingType,
            color: vars.colors.background
        },
        '.fire&': {
            backgroundColor: vars.colors.fireType,
            color: vars.colors.background
        },
        '.flying&': {
            background: `linear-gradient(180deg, ${vars.colors.flyingType1} 50%, ${vars.colors.flyingType2} 50%)`,
            color: vars.colors.darkBackground
        },
        '.ghost&': {
            backgroundColor: vars.colors.ghostType,
            color: vars.colors.background
        },
        '.grass&': {
            backgroundColor: vars.colors.grassType,
            color: vars.colors.darkBackground
        },
        '.ground&': {
            background: `linear-gradient(180deg, ${vars.colors.groundType1} 50%, ${vars.colors.groundType2} 50%)`,
            color: vars.colors.darkBackground
        },
        '.ice&': {
            backgroundColor: vars.colors.iceType,
            color: vars.colors.darkBackground
        },
        '.normal&': {
            backgroundColor: vars.colors.normalType,
            color: vars.colors.darkBackground
        },
        '.poison&': {
            backgroundColor: vars.colors.poisonType,
            color: vars.colors.background
        },
        '.psychic&': {
            backgroundColor: vars.colors.psychicType,
            color: vars.colors.background
        },
        '.rock&': {
            backgroundColor: vars.colors.rockType,
            color: vars.colors.background
        },
        '.steel&': {
            backgroundColor: vars.colors.steelType,
            color: vars.colors.darkBackground
        },
        '.water&': {
            backgroundColor: vars.colors.waterType,
            color: vars.colors.background
        },
    
    }
})