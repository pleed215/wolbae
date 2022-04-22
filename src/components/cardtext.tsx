import React from "react"
import { motion, Variants } from "framer-motion"
import { GatsbyImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image"

const hoverTextAnimationVariants: Variants = {
    init: {
        y: "-200%",
        visibility: "hidden",
        opacity: 0,
    },
    hover: {
        visibility: "visible",
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.6,
            type: "spring",
        },
    },
    tap: {
        visibility: "visible",
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "tween",
        },
    },
}
const emptyVariants: Variants = {
    init: {
        y: "0",
    },
    hover: {
        y: "0",
    },
    tap: {
        y: "0",
    },
}

export type CardTextProp = {
    image: IGatsbyImageData
    title: string
    hoverText: string
    className: string
}

const CardText: React.FC<CardTextProp> = ({
    image,
    title,
    hoverText,
    className,
}) => {
    return (
        <motion.div
            className={className}
            whileHover={"hover"}
            variants={emptyVariants}
            initial={"init"}
            whileFocus={"hover"}
            whileTap={"tap"}
        >
            <GatsbyImage
                image={image}
                alt={title}
                className={"w-full h-full"}
                style={{ gridArea: "1/1" }}
            />
            <div
                className={
                    "w-full group-hover:hidden place-items-center text-center z-10 p-3 bg-white/50 text-xl font-bold"
                }
                style={{ gridArea: "1/1" }}
            >
                {title}
            </div>
            <motion.div
                variants={hoverTextAnimationVariants}
                className={
                    "absolute w-full h-full p-2 bg-lime-600/80 text-white font-jua text-md flex items-center justify-center"
                }
            >
                {hoverText}
            </motion.div>
        </motion.div>
    )
}

export default CardText
