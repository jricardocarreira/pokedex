import { style } from "@vanilla-extract/css";
import { vars } from "./constants.css";

export const typeStyle = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    selectors: {
        '.bug&': {
            backgroundColor: vars.colors.bugType,
            color: vars.colors.darkBackground
        },
        '.dark&': {
            backgroundColor: vars.colors.darkType,
            color: vars.colors.background
        },
        '.dragon&': {
            background: vars.colors.dragonType,
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
            color: vars.colors.darkBackground
        },
        '.flying&': {
            background: vars.colors.flyingType,
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
            background: vars.colors.groundType,
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
            color: vars.colors.darkBackground
        },
        '.psychic&': {
            backgroundColor: vars.colors.psychicType,
            color: vars.colors.darkBackground
        },
        '.rock&': {
            backgroundColor: vars.colors.rockType,
            color: vars.colors.darkBackground
        },
        '.steel&': {
            backgroundColor: vars.colors.steelType,
            color: vars.colors.darkBackground
        },
        '.water&': {
            backgroundColor: vars.colors.waterType,
            color: vars.colors.darkBackground
        },
    
    }
})