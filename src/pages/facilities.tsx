import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import { FileConnection } from "../../graphql-types"
import Dot from "../images/icons/four-dot.svg"
import Gallery from "@browniebroke/gatsby-image-gallery"

type FacilitiesImagesType = {
    allFile: FileConnection
}

const Facilities: React.FC<PageProps<FacilitiesImagesType>> = ({ data }) => {
    const images = data.allFile.edges.map(({ node }) => ({
        ...node.childImageSharp!,
        title: node.name,
        caption: node.name,
    }))

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
            <div className={"my-8"}>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>병원 시설 소개</h1>
                </div>
                <hr className={"my-4"} />
                {/* @ts-ignore */}
                <Gallery images={images} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: { relativeDirectory: { eq: "facility" } }) {
            edges {
                node {
                    name
                    childImageSharp {
                        thumb: gatsbyImageData(
                            width: 270
                            height: 270
                            placeholder: BLURRED
                        )
                        full: gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`

export default Facilities
