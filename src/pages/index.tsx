import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { FileConnection, MdxConnection } from "../../graphql-types"
import { Map, MapMarker } from "react-kakao-maps-sdk"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBus,
    faMap,
    faPlus,
    faTrain,
} from "@fortawesome/free-solid-svg-icons"

type AllMdxType = {
    allMdx: MdxConnection
    allFile: FileConnection
}

const IndexPage: React.FC<PageProps<AllMdxType>> = ({ data }) => {
    const diseaseList = [
        "중풍",
        "뇌혈관질환 후유증",
        "치매",
        "쇠약",
        "만성질환",
        "욕창",
        "파킨슨",
        "수술 후유증",
        "편마비",
        "기타 노인성 질환",
    ]
    return (
        <Layout fullWidth>
            <Helmet>
                <script
                    src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=4fc661cc5efee39dc7d901aabff3c1b9&autoload=false`}
                    defer
                />
            </Helmet>
            <Seo
                title="메인"
                description={"월배요양병원 홈페이지 방문을 환영합니다"}
            />
            {/*TODO: 이미지 캐리셀이나 슬라이더로 바꿀 예정.*/}
            <div className={"mb-8"}>
                <StaticImage
                    src={"../images/herbal.jpg"}
                    alt={"그냥 샘플 이미지"}
                    layout={"fullWidth"}
                />
            </div>
            <div
                className={
                    "text-center max-w-md w-full py-16 flex items-center px-8 bg-lime-700 text-white my-auto mx-auto"
                }
            >
                <h1 className={"text-2xl font-nanum font-thin"}>
                    보이지 않는{" "}
                    <strong className={"text-3xl font-bold"}>"건강"</strong>에{" "}
                    <strong className={"text-2xl font_bold"}>깊이</strong>를
                    더한 간병 중점 요양병원입니다.
                </h1>
            </div>
            <div
                className={
                    "layout flex grid sm:grid-cols-12 grid-cols-4 gap-2 mx-auto mt-8"
                }
            >
                <div
                    className={
                        "col-span-4 sm:aspect-1 border-1 shadow-lg border-gray-400"
                    }
                >
                    <div
                        className={
                            "w-full bg-lime-800 text-white p-2 flex justify-between items-center"
                        }
                    >
                        <p>공지사항</p>
                        <Link to={"/notices"}>
                            <p className={"text-sm"}>더보기</p>
                        </Link>
                    </div>
                    {data &&
                        data.allMdx.nodes.map(notice => (
                            <Link
                                to={`/notices/${notice.fields?.slug!}`}
                                key={`Notice-${notice.id}`}
                            >
                                <div
                                    className={
                                        "w-full p-2 border-b-2 border-b-gray-400 border-dashed flex justify-between text-sm"
                                    }
                                >
                                    <h4>{notice.frontmatter?.title}</h4>
                                    <h4>{notice.frontmatter?.date}</h4>
                                </div>
                            </Link>
                        ))}
                </div>
                <div
                    className={
                        "col-span-4 sm:aspect-1 flex flex-col border-1 shadow-lg border-gray-400"
                    }
                >
                    <div
                        className={
                            "flex justify-between items-center bg-lime-800 text-white p-2"
                        }
                    >
                        <p>진료 안내</p>
                        <Link to={"/adm-treat-info"}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Link>
                    </div>
                    <div className={"w-full p-2"}>
                        <div className={"flex items-center justify-start"}>
                            <span
                                className={
                                    "bg-lime-600 p-1 rounded-sm text-white mr-2 text-sm"
                                }
                            >
                                상담 전화
                            </span>
                            <p className={"text-orange-600 font-bold text-2xl"}>
                                <a href={"tel:010-5163-8181"}>010-5163-8181</a>
                            </p>
                        </div>
                    </div>
                    <div className={"w-full p-2"}>
                        <div className={"flex items-center justify-start"}>
                            <span
                                className={
                                    "bg-lime-600 p-1 rounded-sm text-white mr-2 text-sm"
                                }
                            >
                                병원 전화
                            </span>
                            <p className={"text-orange-600 font-bold text-2xl"}>
                                <a href={"tel:053-632-0808"}>053-632-0808</a>
                            </p>
                        </div>
                    </div>
                    <hr className={"mb-2"} />
                    <div className={"px-2"}>
                        <span
                            className={
                                "bg-lime-600 p-1 text-sm rounded-sm text-white"
                            }
                        >
                            진료 질환
                        </span>
                        <div className={"flex flex-wrap text-xs mt-1"}>
                            {diseaseList.map(d => (
                                <span
                                    key={d}
                                    className={
                                        "bg-orange-600 text-white rounded-xl py-1 px-2 m-1"
                                    }
                                >
                                    # {d}
                                </span>
                            ))}
                        </div>
                        <hr className={"my-2"} />
                        <span className={"text-sm"}>
                            24시간 상담이 가능합니다. 방문상담은 3층 상담실.
                        </span>
                    </div>
                </div>
                <div
                    className={
                        "col-span-4 sm:aspect-1 border-1 shadow-lg border-gray-400"
                    }
                >
                    <div
                        className={
                            "flex justify-between items-center bg-lime-800 text-white p-2"
                        }
                    >
                        <p>찾아 오시는 길</p>
                        <Link to={"/way-to-come"}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Link>
                    </div>
                    <Map
                        center={{ lat: 35.81516, lng: 128.52734 }}
                        className={"w-full h-[200px]"}
                        draggable={false}
                    >
                        <MapMarker
                            position={{ lat: 35.81516, lng: 128.52734 }}
                            title={"월배요양병원"}
                        />
                    </Map>
                    <div className={"mt-2 px-2"}>
                        <div
                            className={
                                "flex items-center justify-start text-sm mb-2"
                            }
                        >
                            <FontAwesomeIcon icon={faMap} className={"mr-2"} />
                            <span>
                                <strong>주소: </strong>대구시 달서구 월배로 119
                                KS빌딩 3,5~8층
                            </span>
                        </div>
                        <div
                            className={
                                "flex items-center justify-start text-sm mb-2"
                            }
                        >
                            <FontAwesomeIcon
                                icon={faTrain}
                                className={"mr-2"}
                            />
                            <span>
                                <strong>지하철: </strong>월배역 1번 출구, 진천역
                                4번 출구 200m
                            </span>
                        </div>
                        <div
                            className={
                                "flex items-center justify-start text-sm"
                            }
                        >
                            <FontAwesomeIcon icon={faBus} className={"mr-2"} />
                            <span>
                                <strong>버스: </strong>600, 650, 651, 836,
                                달서5, 달성2
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"layout mx-auto my-8 grid "}>
                <StaticImage
                    src={"../images/certified.png"}
                    alt={"인증로고"}
                    layout={"fullWidth"}
                    style={{ gridArea: "1/1" }}
                />
                <div
                    style={{ gridArea: "1/1" }}
                    className={"w-full  flex items-center justify-center z-20 "}
                >
                    <h1 className={"bg-white/50 px-4 py-2 text-3xl"}>
                        월배요양병원은 보건복지부 인증 의료기관입니다.
                    </h1>
                </div>
            </div>

            <div
                className={
                    "layout grid sm:grid-cols-9 grid-cols-3 gap-10 mt-8 mx-auto"
                }
            >
                <div className={"col-span-3 bg-red-300 "}>
                    <StaticImage
                        src={"../images/main1.jpg"}
                        alt={"방역 철저"}
                    />
                </div>
                <div className={"col-span-3 bg-yellow-300"}>
                    <StaticImage src={"../images/main2.jpg"} alt={"사회복지"} />
                </div>
                <div className={"bg-blue-300 col-span-3"}>
                    <StaticImage
                        src={"../images/main3.jpg"}
                        alt={"물리 치료:"}
                    />
                </div>
            </div>

            <div className={"layout my-8 mx-auto"}>
                여기는 마무리 메세지가 들어가자. 사진에 필터를 입혀서 그 위에
                글을 쓰는 것도 좋을 것 같다.
            </div>
        </Layout>
    )
}

export default IndexPage
export const query = graphql`
    query indexPageQuery {
        allMdx(
            limit: 7
            sort: {
                order: [DESC, DESC]
                fields: [frontmatter___date, frontmatter___title]
            }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    subtitle
                    author
                    date(formatString: "YYYY-MM-DD")
                }
                excerpt
                fields {
                    slug
                }
            }
        }
        allFile(
            filter: { relativePath: { regex: "/(main)([0-9]).jpg/" } }
            sort: { fields: relativePath, order: ASC }
        ) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(width: 420)
                    }
                }
            }
        }
    }
`
