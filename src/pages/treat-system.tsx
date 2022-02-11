import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TreatSystem = () => {
    return (
        <Layout
            useHero
            menuInfo={"프로그램 소개 > 치료 프로그램"}
            pageTitle={"치료 프로그램"}
        >
            <Seo
                title={"치료프로그램"}
                description={"월배요양병원 치료프로그램 소개 페이지입니다."}
            />
            <div className={"mt-10"}>
                <h1>치료 프로그램 페이지</h1>
            </div>
        </Layout>
    )
}

export default TreatSystem
