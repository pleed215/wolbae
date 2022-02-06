import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Greeting = () => {
    return (
        <Layout
            useHero
            menuInfo={"병원 소개 > 인사말"}
            pageTitle={"병원장 인사말"}
        >
            <Seo title={"인사말"} description={"인사말"} />
        </Layout>
    )
}
export default Greeting
