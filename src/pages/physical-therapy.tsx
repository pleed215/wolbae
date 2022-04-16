import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"
import { graphql, PageProps } from "gatsby"
import { FileConnection } from "../../graphql-types"
import CardText, { CardTextProp } from "../components/cardtext"

type DataType = {
    allFile: FileConnection
}
const PhysicalTherapy: React.FC<PageProps<DataType>> = ({ data }) => {
    const movingTherapies: Omit<CardTextProp, "className">[] = [
        {
            title: "지속적 운동 치료기(CPM)",
            hoverText:
                "관절의 경직 및 유착 등을 방지하고자 개발 되어진 운동기구로서, 지속적인 수동 운동을 통하여 부작용을 최소화하며 관절의 기능을 빠르게 회복시키기 위해 개발된 재활운동 기구입니다. 관절의 변형을 방지 및 운동범위를 정상적으로 회복시켜 줍니다.",
            image: data.allFile.edges[4].node.childImageSharp?.gatsbyImageData,
        },
        {
            title: "기립 테이블(Standing table)",
            hoverText:
                "척수 손상이나 뇌졸증 등으로 손상을 받은 환자분들의 근력강화, 골다공증 예방, 근 경련, 구축 감소, 욕창 방지, 선자세 경험을 위해 사용하는 장비입니다.",
            image: data.allFile.edges[0].node.childImageSharp?.gatsbyImageData,
        },
        {
            title: "경사침대(Tilting table)",
            hoverText:
                "척추 손상 환자, 뇌졸중 환자 등 독립적으로 서기 어려운 환자에게 선 자세를 경험하게 해주는 운동기구로써, 기립훈련, 혈액순환 증진, 하지근력 강화, 요로결석 예방, 기립성 저혈압 방지 등의 효과가 있습니다.",
            image: data.allFile.edges[5].node.childImageSharp?.gatsbyImageData,
        },
    ]
    const painTherapies: Omit<CardTextProp, "className">[] = [
        {
            title: "중주파 간섭 치료기(ICT)",
            hoverText:
                "두 개 혹은 그 이상의 서로 다른 중주파 전료를 일련의 지점에서 교차통전 시켰을 때 간섭현상으로 새로운 저주파 전류를 발생시켜, 이를 사용하여 전기 치료를 합니다. 혈관 확장에 의한 국소 및 원격 혈류량 증진과 대사과정을 촉진시켜 부종 및 혈종 흡수, 염증 완화, 진통효과 창상 치유과정을 촉진 시키는 효과가 있습니다.",
            image: data.allFile.edges[2].node.childImageSharp?.gatsbyImageData,
        },
        {
            title: "경피적 신경자극 치료(TENS)",
            hoverText:
                "저주파 전류를 이용하여 피부의 말초신경을 자극, 다양한 원인으로 초래되는 통증을 치료하는 방법입니다.",
            image: data.allFile.edges[3].node.childImageSharp?.gatsbyImageData,
        },
        {
            title: "온열요법",
            hoverText:
                "적외선, 온습포를 이용하여 국소적인 열감을 주어 혈관을 팽창시키고 손상된 근육 세포 등을 자연적으로 치료되도록 돕는 것입니다.",
            image: data.allFile.edges[1].node.childImageSharp?.gatsbyImageData,
        },
    ]
    return (
        <Layout
            useHero
            menuInfo={"프로그램 소개 > 물리치료 프로그램"}
            pageTitle={"물리치료 프로그램"}
        >
            <Seo
                title={"물리치료 프로그램"}
                description={
                    "월배요양병원 물리 치료 프로그램 소개 페이지입니다."
                }
            />
            <div className={"mt-10"}>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>운동 치료</h1>
                </div>
                <hr className={"my-4"} />
                <h4>
                    외부의 복잡한 정보를 처리하는 뇌와 중추 신경계가 손상되어
                    팔, 다리 등의 신체 기능에 장애가 발생한 경우, 환자 개인마다
                    1:1 각기 다른 운동 치료 프로그램을 적용하게 됩니다. 이렇게
                    해당 환자에게 가장 효율적인 방법으로 처방된 운동치료
                    프로그램은 환자가 최대한 빠른 시간에 정상에 가까운 생활을
                    영위할 수 있도록 손상된 운동 기능을 회복시켜 줍니다.
                </h4>
                <div className={"grid sm:grid-cols-3 grid-cols-1 gap-4 my-8"}>
                    {movingTherapies.map(d => (
                        <CardText
                            key={d.title}
                            {...d}
                            className={
                                "bg-blue-100 w-full h-72 flex items-center justify-center relative group grid"
                            }
                        />
                    ))}
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>통증 치료</h1>
                </div>
                <hr className={"my-4"} />
                <h4>
                    환자가 특정 부위 혹은 광범위한 부위에 통증을 호소할 경우,
                    시진, 촉진, 문진 등의 진찰소견 및 다양한 진단을 통하여 그
                    원인을 정확히 밝혀내고 각종 보완요법 중 적합한 방법을
                    병행하여 사욤함으로써 통증이 지속적으로 경감되는 효과를
                    가지는 치료입니다.
                </h4>
                <div className={"grid sm:grid-cols-3 grid-cols-1 gap-4 my-8"}>
                    {painTherapies.map(d => (
                        <CardText
                            key={d.title}
                            {...d}
                            className={
                                "bg-blue-100 w-full h-72 flex items-center justify-center relative group grid"
                            }
                        />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default PhysicalTherapy
export const query = graphql`
    query physicalImages {
        allFile(
            filter: { relativePath: { regex: "/(pt_)(\\w+).(jpg|png)/g" } }
            sort: { fields: extension, order: ASC }
        ) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(width: 480)
                    }
                }
            }
        }
    }
`
