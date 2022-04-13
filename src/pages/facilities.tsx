import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import { useEffect, useState } from "react"
import { FileConnection, Site } from "../../graphql-types"
import Dot from "../images/icons/four-dot.svg"

type FacilityDataType = {
    [category: string]: FacilitySubDataType[]
}

type FacilitySubDataType = {
    name: string
    image: IGatsbyImageData
}

type FacilitiesImagesType = {
    allFile: FileConnection
}

const Facilities: React.FC<PageProps<FacilitiesImagesType>> = ({ data }) => {
    const [facilities, setFacilities] = useState<FacilityDataType>({})
    const [currentSelection, setCurrentSelection] =
        useState<FacilitySubDataType>()

    useEffect(() => {
        const facilities: FacilityDataType = {}
        data.allFile.edges.forEach(edge => {
            const [category, name] = edge.node.name.split("_")
            const facilityData = {
                name,
                image: edge.node.childImageSharp?.gatsbyImageData,
            }
            facilities[category] = facilities[category]
                ? [...facilities[category], facilityData]
                : [facilityData]
        })
        console.log(facilities)
        setFacilities({ ...facilities })
    }, [data])

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
                <div className={"flex flex-col"}>
                    <p>
                        TODO: 이미지 슬라이더는 나중에 구현하고 일단 그리드로
                        배치. 이미지는 가로 방향으로 통일 할 것.
                    </p>
                    {Object.keys(facilities).map(category => (
                        <div key={category} className={"flex"}>
                            <h1>{category}</h1>
                            {facilities[category].map(data => (
                                <div key={data.name}>
                                    <h4>{data.name}</h4>
                                    <GatsbyImage
                                        alt={".."}
                                        image={data.image}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
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
                        gatsbyImageData(width: 300)
                    }
                }
            }
        }
    }
`

export default Facilities
