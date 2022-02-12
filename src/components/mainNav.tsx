import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Link } from "gatsby"
import { Maybe, MenuLinks } from "../../graphql-types"

type MainNavProps = {
    menuLinks: Maybe<MenuLinks>[]
}

const hoverMenuVars: Variants = {
    init: {
        // @ts-ignore
        "--after-x": "translateX(-40%)",
        "--after-opacity": "0",
    },
    hover: {
        // @ts-ignore
        "--after-x": "translateX(0)",
        "--after-opacity": "1",
    },
}

const popupAnimateVars: Variants = {
    init: {
        opacity: 0,
        display: "none",
        y: -10,
    },
    hover: {
        display: "block",
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            type: "tween",
        },
    },
}

const MainNav: React.FC<MainNavProps> = ({ menuLinks }) => {
    return (
        <ul className={"flex justify-between"}>
            {menuLinks &&
                menuLinks.map(
                    menu =>
                        menu && (
                            <motion.li
                                key={menu.link}
                                className={"group relative header-menu__popup"}
                                variants={hoverMenuVars}
                                initial={"init"}
                                whileHover={"hover"}
                            >
                                {menu.name}
                                {menu.subMenu && (
                                    <motion.ul
                                        className={
                                            "z-10 font-gothic group-last:right-0 absolute max-w-[200px] min-w-[150px] shadow-lg bg-gray-100 w-full py-3 rounded"
                                        }
                                        variants={popupAnimateVars}
                                    >
                                        {menu.subMenu.map(
                                            subMenu =>
                                                subMenu && (
                                                    <Link
                                                        key={subMenu.name}
                                                        to={subMenu.link!}
                                                    >
                                                        <li
                                                            className={
                                                                "hover:font-bold hover:bg-gray-200 border-b py-2 last:pt-2 last:border-b-0 px-2"
                                                            }
                                                            onClick={() => {}}
                                                        >
                                                            {subMenu.name}
                                                        </li>
                                                    </Link>
                                                )
                                        )}
                                    </motion.ul>
                                )}
                            </motion.li>
                        )
                )}
        </ul>
    )
}

export default MainNav
