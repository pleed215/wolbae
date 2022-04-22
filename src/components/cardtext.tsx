import React, { useCallback, useState } from "react"
import { motion, useAnimation, Variants } from "framer-motion"
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
}

const mobileAnimationVariants: Variants = {
    init: {
        visibility: "hidden",
        opacity: 0,
        transition: {
            duration: 0.4,
            type: "tween",
        },
    },
    tap: {
        visibility: "visible",
        opacity: 1,
        transition: {
            duration: 0.4,
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

const isMobile = () => {
    if (typeof navigator !== "undefined") {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    }
    return false
}

const CardText: React.FC<CardTextProp> = ({
    image,
    title,
    hoverText,
    className,
}) => {
    const [open, setOpen] = useState(false)
    const [mobile] = useState(isMobile())
    const animation = useAnimation()
    const onMobileClick = async () => {
        if (!mobile) return
        await animation.start(open ? "init" : "tap")
        setOpen(prev => !prev)
    }
    return (
        <motion.div
            className={className}
            {...(!mobile && { whileHover: "hover" })}
            variants={emptyVariants}
            initial={"init"}
            onClick={onMobileClick}
            onBlur={async () => await animation.start("init")}
        >
            <GatsbyImage
                image={image}
                alt={title}
                className={"w-full h-full"}
                style={{ gridArea: "1/1" }}
            />
            <div
                className={`w-full ${
                    !mobile && "group-hover:hidden"
                } place-items-center text-center z-10 p-3 bg-white/50 text-xl font-bold`}
                style={{ gridArea: "1/1" }}
            >
                {title}
            </div>
            <motion.div
                {...(mobile && {
                    animate: animation,
                    initial: "init",
                    variants: mobileAnimationVariants,
                })}
                {...(!mobile && { variants: hoverTextAnimationVariants })}
                className={
                    "absolute w-full h-full p-2 bg-lime-600/80 text-white font-jua text-md flex items-center justify-center z-10"
                }
            >
                {hoverText}
            </motion.div>
        </motion.div>
    )
}

export default CardText
