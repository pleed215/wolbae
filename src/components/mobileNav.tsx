import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Maybe, MenuLinks } from "../../graphql-types"
import { Link } from "gatsby"
import MobileMenuItem from "./mobileMenuItem"

const mobileMenuAnimateVars: Variants = {
    hidden: {
        opacity: 0,
        x: "40%",
    },
    show: {
        opacity: 1,
        x: "0",
        transition: {
            duration: 0.3,
        },
    },
}

type MobileNavProps = {
    show: boolean
    menuLinks: Maybe<MenuLinks>[]
}

const MobileNav: React.FC<MobileNavProps> = ({ show, menuLinks }) => {
    return show ? (
        <motion.nav
            variants={mobileMenuAnimateVars}
            animate={show ? "show" : "hidden"}
            className={
                "absolute right-0 top-12 z-20 w-full bg-gray-200 origin-top-right border-t border-gray-400 block sm:hidden"
            }
            initial={"hidden"}
        >
            {menuLinks.map(menu => menu && <MobileMenuItem menu={menu} />)}
        </motion.nav>
    ) : (
        <></>
    )
}

export default MobileNav
