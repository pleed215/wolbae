import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Cooperation = () => {
    return (
        <Layout
            useHero
            menuInfo={"공지 및 협력 > 대외 협력"}
            pageTitle={"대외 협력"}
        >
            <Seo
                title={"대외 협력"}
                description={"월배요양병원 대외협력 소개 페이지입니다."}
            />
            <div className={"mt-10"}>
                <h1>대외 협력 페이지</h1>
            </div>
        </Layout>
    )
}

export default Cooperation
