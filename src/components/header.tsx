import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone, faStream, faTimes} from "@fortawesome/free-solid-svg-icons"
import {
    motion,
    useAnimation,
    useViewportScroll,
    Variants,
} from "framer-motion"
import {Site} from "../../graphql-types"
import MainNav from "./mainNav"
import {useEffect, useRef, useState} from "react"
import MobileNav from "./mobileNav"
import useOutsideClickDetector from "../utils/hooks/useOutsideAlerter"
import {StaticImage} from "gatsby-plugin-image"

const headerAnimateVars: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
}

type HeaderProps = { siteTitle: string }

const Header = ({siteTitle}: HeaderProps) => {
    const headerAnimate = useAnimation()
    const {scrollY} = useViewportScroll()
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
    const headerRef = useRef<HTMLElement>(null)
    const clickedOutside = useOutsideClickDetector(headerRef)
    React.useEffect(() => {
        scrollY.onChange(async () => {
            if (scrollY.get() > 40) {
                await headerAnimate.start("hidden")
            } else {
                await headerAnimate.start("show")
            }
        })
    }, [scrollY, headerAnimate])
    const {site} = useStaticQuery<{ site: Site }>(graphql`
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
    const onClickToggleMobileMenu = () => {
        setToggleMobileMenu(prev => !prev)
    }

    useEffect(() => {
        if (clickedOutside) {
            setToggleMobileMenu(false)
        }
    }, [clickedOutside])

    return (
        <motion.header
            variants={headerAnimateVars}
            animate={headerAnimate}
            initial={"show"}
            transition={{default: 1}}
            className={"font-jua w-full shadow flex  flex-col"}
            ref={headerRef}
        >
            <div className={"w-full bg-lime-900"}>
                <div
                    className={
                        "layout w-full h-10 text-lg text-white flex items-center justify-between mx-auto lg:px-0 px-4"
                    }
                >
                    <div className={"flex items-center"}>
                        <a href={"tel:010-5163-8181"}>
                            <div className={"flex items-center"}>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    size={"1x"}
                                    className={"mr-4"}
                                />
                                <h1>010-5163-8181</h1>
                            </div>
                        </a>
                        <a href={"https://blog.naver.com/wb6320808"} className={"ml-2"}>
                            <StaticImage width={24} height={24} src={"../images/nblog.png"} alt={"월배요양병원 블로그"}/>
                        </a>
                    </div>

                    <div>
                        <Link to={"/way-to-come"}>
                            <h4>찾아오시는 길</h4>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className={
                    "w-full flex items-center justify-center min-h-[50px] sm:px-0 px-4 relative"
                }
            >
                <div className={"layout flex sm:justify-start justify-between"}>
                    <h1 className={"lg:mr-40 mr-20 inline"}>
                        <Link className={"text-black"} to="/">
                            <StaticImage
                                src={"../images/logo.png"}
                                width={140}
                                alt={"월배요양병원 로고"}
                            />
                        </Link>
                    </h1>
                    <nav className={"w-full w-full sm:inline hidden my-auto"}>
                        {site.siteMetadata && site.siteMetadata.menuLinks && (
                            <MainNav menuLinks={site.siteMetadata.menuLinks}/>
                        )}
                    </nav>
                    <div
                        id={"mobile-menu__anchor"}
                        className={"relative sm:hidden inline my-auto"}
                    >
                        <button
                            className={"outline-none"}
                            onClick={onClickToggleMobileMenu}
                        >
                            {toggleMobileMenu ? (
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    color={"black"}
                                    size={"lg"}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faStream}
                                    color={"black"}
                                />
                            )}
                        </button>
                    </div>
                </div>
                {site.siteMetadata && site.siteMetadata.menuLinks && (
                    <MobileNav
                        show={toggleMobileMenu}
                        menuLinks={site.siteMetadata.menuLinks}
                    />
                )}
            </div>
        </motion.header>
    )
}

export default Header
