import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CognitiveTreat = () => {
    return (
        <Layout
            useHero
            menuInfo={"프로그램 소개 > 인지기능 프로그램"}
            pageTitle={"인지기능 향상 프로그램"}
        >
            <Seo
                title={"인지기능 향상 프로그램"}
                description={
                    "월배요양병원 인지기능 향상 프로그램 소개 페이지입니다."
                }
            />
            <div className={"mt-10"}>
                <h1>치료 프로그램 페이지</h1>
            </div>
        </Layout>
    )
}

export default CognitiveTreat
