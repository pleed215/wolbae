/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import {
    motion,
    useAnimation,
    useViewportScroll,
    Variants,
} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const upFabAnimateVariants: Variants = {
    show: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}

const Layout = ({ children }) => {
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
            <div className={"min-h-screen w-full relative"}>
                <main className={"layout mx-auto"}>{children}</main>
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
