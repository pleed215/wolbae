import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { MdxConnection } from "../../graphql-types"
import { Map, MapMarker } from "react-kakao-maps-sdk"

type AllMdxType = {
    allMdx: MdxConnection
}

const IndexPage: React.FC<PageProps<AllMdxType>> = ({ data }) => {
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
                    "text-center max-w-md w-full py-16 flex items-center px-8 bg-green-700 text-white my-auto mx-auto"
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
                <div className={"col-span-4 aspect-1"}>
                    <div
                        className={
                            "w-full bg-lime-600 text-white p-2 flex justify-between items-center"
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
                <div className={"col-span-4 aspect-1 bg-red-300"}>
                    오시는 길 들어갈 자리
                </div>
                <div className={"col-span-4 aspect-1 bg-blue-300"}>
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
                </div>
            </div>

            <div className={"layout w-full mx-auto my-8"}>
                여긴 인증의료기관 마크와 인증 받은 의료기관임을 나타내주는
                문구가 들어감
            </div>

            <div
                className={
                    "layout grid sm:grid-cols-9 grid-cols-3 gap-10 mt-8 mx-auto"
                }
            >
                <div className={"col-span-3 bg-red-300 aspect-1 "}>
                    여긴 사진이 들어갈거야
                </div>
                <div className={"col-span-3 bg-yellow-300 aspect-1"}>
                    여기도 사진이 들어갈거야
                </div>
                <div className={"bg-blue-300 col-span-3 aspect-1"}>
                    여기도 사진이 들어가
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
    }
`
