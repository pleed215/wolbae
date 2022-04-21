import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import {
    FileConnection,
    MdxConnection,
    File as FileType,
} from "../../graphql-types"
import { Map, MapMarker } from "react-kakao-maps-sdk"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBus,
    faMap,
    faPlus,
    faTrain,
} from "@fortawesome/free-solid-svg-icons"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TypeIt from "typeit-react"
type AllMdxType = {
    allMdx: MdxConnection
    allFile: FileConnection
    index1: FileType
    index2: FileType
    index3: FileType
}

const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <Slider
                className={"mb-8 w-full max-h-[500px] overflow-hidden"}
                {...sliderSettings}
            >
                <div>
                    <div className={"w-full h-full grid "}>
                        <div
                            style={{ gridArea: "1/1" }}
                            className={
                                "w-full h-full flex items-center justify-center z-20 sm:text-3xl text-lg"
                            }
                        >
                            <TypeIt
                                options={{
                                    cursor: false,
                                    waitUntilVisible: true,
                                    html: true,
                                }}
                            >
                                <h1
                                    className={
                                        "p-3 text-gray-700 text-neutral-700 bg-white/50 z-30"
                                    }
                                >
                                    월배요양병원은 보건복지부 인증
                                    요양기관입니다
                                </h1>
                            </TypeIt>
                        </div>
                        <GatsbyImage
                            className={"w-full h-full"}
                            style={{ gridArea: "1/1" }}
                            alt={"index1"}
                            image={data.index1.childImageSharp?.gatsbyImageData}
                        />
                    </div>
                </div>
                <div>
                    <div className={"w-full h-full grid"}>
                        <GatsbyImage
                            className={"w-full h-full"}
                            alt={"index1"}
                            style={{ gridArea: "1/1" }}
                            image={data.index2.childImageSharp?.gatsbyImageData}
                        />
                        <div
                            style={{ gridArea: "1/1" }}
                            className={
                                "w-full h-full flex items-center justify-center z-20 sm:text-3xl text-lg"
                            }
                        >
                            <TypeIt
                                options={{
                                    cursor: false,
                                    waitUntilVisible: true,
                                }}
                            >
                                <h1
                                    className={
                                        "p-3 text-gray-700 text-neutral-700 bg-white/50 z-30"
                                    }
                                >
                                    정성을 다해, 따뜻한 마음으로 어르신을
                                    모십니다
                                </h1>
                            </TypeIt>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"w-full h-full grid"}>
                        <GatsbyImage
                            className={"w-full h-full"}
                            style={{ gridArea: "1/1" }}
                            alt={"index1"}
                            image={data.index3.childImageSharp?.gatsbyImageData}
                        />
                        <div
                            style={{ gridArea: "1/1" }}
                            className={
                                "w-full h-full flex items-center justify-center z-20 sm:text-3xl text-lg"
                            }
                        >
                            <TypeIt
                                options={{
                                    cursor: false,
                                    waitUntilVisible: true,
                                }}
                            >
                                <h1
                                    className={
                                        "p-3 text-gray-700 text-neutral-700 bg-white/50 z-30"
                                    }
                                >
                                    내 집처럼 편안한 월배요양병원
                                </h1>
                            </TypeIt>
                        </div>
                    </div>
                </div>
            </Slider>

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
                    "layout flex grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-2 mx-auto mt-8"
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
                        <p className={"text-sm mb-2"}>
                            24시간 상담이 가능합니다. 방문상담은 3층 상담실.
                        </p>
                    </div>
                </div>
                <div
                    className={
                        "lg:col-span-4 sm:col-span-8 col-span-4 lg:aspect-1 border-1 shadow-lg border-gray-400"
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
            <div
                className={
                    "layout mx-auto my-8 grid md:grid-cols-2 grid-cols-1 gap-4"
                }
            >
                <div className={"w-full grid"}>
                    <StaticImage
                        src={"../images/banner1.png"}
                        alt={"banner"}
                        className={"bg-lime-600"}
                        style={{ gridArea: "1/1" }}
                    />
                    <div
                        style={{ gridArea: "1/1" }}
                        className={
                            "z-10 w-2/3 flex  flex-col justify-center p-2 text-gray-100"
                        }
                    >
                        <h4 className={"text-left text-xl font-bold"}>
                            정성을 다하는 영양 서비스
                        </h4>
                        <p>
                            직영 식당 운영 및 조리사, 영양사를 두어 어르신들
                            건강 및 영양상태에 맞는 식사와, 높은 식단가의 우수한
                            식자재를 제공하여 어르신들의 영양 건강에 최선을
                            다하고 있습니다.
                        </p>
                    </div>
                </div>
                <div className={"w-full grid"}>
                    <StaticImage
                        src={"../images/banner2.png"}
                        alt={"banner"}
                        className={"bg-emerald-600"}
                        style={{ gridArea: "1/1" }}
                    />
                    <div
                        style={{ gridArea: "1/1" }}
                        className={
                            "z-10 w-2/3 flex  flex-col justify-center p-2 text-gray-100"
                        }
                    >
                        <h4 className={"text-left text-xl font-bold"}>
                            따듯한 간병과 간호, 우수한 진료 서비스
                        </h4>
                        <p>
                            어르신들에게 친절한 간병 서비스를 제공하기 위해
                            간병사, 간호사들에게 철저한 CS교육에 신경 쓰고
                            있으며, 전문의가 진료하여 우수한 의료 서비스를
                            받으실 수 있습니다.
                        </p>
                    </div>
                </div>
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
        index1: file(relativePath: { eq: "index1.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
        index2: file(relativePath: { eq: "index2.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
        index3: file(relativePath: { eq: "index3.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
    }
`
