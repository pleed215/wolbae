/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import {
    motion,
    useAnimation,
    useViewportScroll,
    Variants,
} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faHome } from "@fortawesome/free-solid-svg-icons"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"

const upFabAnimateVariants: Variants = {
    show: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}

type LayoutProps = {
    useHero?: boolean
    pageTitle?: string
    menuInfo?: string
    fullWidth?: boolean
}

const Layout: React.FC<LayoutProps> = ({
    useHero,
    pageTitle,
    menuInfo,
    fullWidth,
    children,
}) => {
    const upFabAnimate = useAnimation()
    const { scrollY } = useViewportScroll()

    React.useEffect(() => {
        scrollY.onChange(async () => {
            if (scrollY.get() > 80) {
                await upFabAnimate.start("show")
            } else {
                await upFabAnimate.start("hidden")
            }
        })
    }, [scrollY, upFabAnimate])

    const onClickTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div className={"min-h-screen h-full w-full relative pb-4"}>
                {useHero && (
                    <>
                        <div className={"grid"}>
                            <StaticImage
                                className={"max-h-[275px]"}
                                style={{ gridArea: "1/1" }}
                                src={"../images/parallax.png"}
                                alt={"월배요양병원 hero 이미지"}
                                layout={"fullWidth"}
                            />
                            <div
                                className={
                                    "w-full h-[275px] bg-cover relative grid place-items-center"
                                }
                                style={{ gridArea: "1/1" }}
                            >
                                <h1
                                    className={
                                        "lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold font-jua text-gray-800"
                                    }
                                >
                                    {pageTitle}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full h-10 bg-lime-900 flex"}>
                            <div
                                className={
                                    "layout mx-auto w-full h-full flex items-center"
                                }
                            >
                                <div
                                    className={
                                        "h-10 w-10 flex justify-center items-center border-l border-r border-gray-200"
                                    }
                                >
                                    <Link to={"/"}>
                                        <FontAwesomeIcon
                                            icon={faHome}
                                            className={"text-white"}
                                            size={"lg"}
                                        />
                                    </Link>
                                </div>
                                <h1 className={"ml-2  font-gothic text-white"}>
                                    {menuInfo}
                                </h1>
                            </div>
                        </div>
                    </>
                )}
                <main
                    className={clsx("mx-auto", fullWidth ? "w-full" : "layout")}
                >
                    {children}
                </main>
                <motion.button
                    variants={upFabAnimateVariants}
                    animate={upFabAnimate}
                    initial={"hidden"}
                    className={
                        "fixed right-5 bottom-5 w-16 h-16 bg-gray-400/50 rounded"
                    }
                    onClick={onClickTop}
                >
                    <FontAwesomeIcon
                        icon={faArrowUp}
                        className={"text-gray-800 block mx-auto"}
                    />
                    <span className={"font-jua text-sm"}>Top</span>
                </motion.button>
            </div>
            <Footer />
        </>
    )
}

export default Layout
