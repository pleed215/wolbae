import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStream } from "@fortawesome/free-solid-svg-icons"
import {
    motion,
    useAnimation,
    useViewportScroll,
    Variants,
} from "framer-motion"

const headerAnimateVars: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
}

const hoverMenuVars: Variants = {
    init: {
        textDecoration: "none",
    },
    hover: {
        textDecoration: "underline",
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

const Header = ({ siteTitle }) => {
    const headerAnimate = useAnimation()
    const { scrollY } = useViewportScroll()
    React.useEffect(() => {
        scrollY.onChange(async () => {
            if (scrollY.get() > 40) {
                await headerAnimate.start("hidden")
            } else {
                await headerAnimate.start("show")
            }
        })
    }, [scrollY, headerAnimate])
    const {
        site: {
            siteMetadata: { menuLinks },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    menuLinks {
                        name
                        link
                        subMenu {
                            name
                            link
                        }
                    }
                }
            }
        }
    `)
    return (
        <motion.header
            variants={headerAnimateVars}
            animate={headerAnimate}
            initial={"show"}
            transition={{ default: 1 }}
            className={
                "font-jua w-full shadow h-[80px] flex items-center justify-center sm:px-0 px-4"
            }
        >
            <div
                className={
                    "lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm max-w-screen-xs w-full mx-auto my-auto flex sm:justify-start justify-between"
                }
            >
                <h1 className={"lg:mr-40 mr-20 min-w-max inline"}>
                    <Link className={"text-black"} to="/">
                        {siteTitle}
                    </Link>
                </h1>
                <nav className={"w-full w-full sm:inline hidden"}>
                    <ul className={"flex justify-between"}>
                        {menuLinks?.map(menu => (
                            <motion.li
                                key={menu.link}
                                className={"group relative"}
                                variants={hoverMenuVars}
                                initial={"init"}
                                whileHover={"hover"}
                            >
                                <Link to={menu.link}>{menu.name}</Link>
                                {menu.subMenu && (
                                    <motion.ul
                                        className={
                                            "z-10 font-gothic group-last:right-0 border-t-emerald-600 border-t-4 absolute max-w-[200px] min-w-[150px] shadow-lg bg-gray-100 w-full py-3 rounded"
                                        }
                                        variants={popupAnimateVars}
                                    >
                                        {menu.subMenu.map(subMenu => (
                                            <Link
                                                key={subMenu.name}
                                                to={subMenu.link}
                                            >
                                                <li
                                                    className={
                                                        "hover:font-bold hover:bg-gray-200 border-b py-2 last:pt-2 last:border-b-0 px-2"
                                                    }
                                                >
                                                    {subMenu.name}
                                                </li>
                                            </Link>
                                        ))}
                                    </motion.ul>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <button className={"outline-none sm:hidden inline"}>
                    <FontAwesomeIcon icon={faStream} color={"black"} />
                </button>
            </div>
        </motion.header>
    )
}

export default Header
