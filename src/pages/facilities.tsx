import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Facilities = () => {
    return (
        <Layout
            useHero
            menuInfo={"병원 시설 안내 > 시설 소개"}
            pageTitle={"병원 시설 안내"}
        >
            <Seo
                title={"병원 시설 안내"}
                description={"월배요양병원 시설 안내 페이지입니다."}
            />
            <div>시설 소개</div>
        </Layout>
    )
}

export default Facilities
