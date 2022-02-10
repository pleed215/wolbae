import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const CounselVisitInfo = () => {
    return (
        <Layout
            menuInfo={"진료 안내 > 상담 및 면회 안내"}
            useHero
            pageTitle={"상담 및 면회 안내"}
        >
            <Seo
                title={"상담 및 방문 안내"}
                description={"월배요양병원 상담 및 방문 안내"}
            />
            <div className={"mt-16 w-full"}>
                <div className={"flex items-center"}>
                    <Dot className={"mr-4"} />
                    <h1 className={"text-2xl"}>입원 상담 및 시간 안내</h1>
                </div>
                <hr className={"my-4"} />
                <div className={"w-full grid"}>
                    <StaticImage
                        src={"../images/24hr.jpg"}
                        alt={"월배요양병원 24시간 상담"}
                        layout={"fullWidth"}
                        className={"max-h-[250px]"}
                        style={{ gridArea: "1/1" }}
                    />
                    <div
                        style={{ gridArea: "1/1" }}
                        className={"grid place-items-start z-10"}
                    >
                        <div
                            className={
                                "ml-4 mt-4 p-4 bg-white/50 text-gray-800 font-jua"
                            }
                        >
                            <h4 className={"text-2xl"}>
                                24시간 입원 상담이 가능합니다.
                            </h4>
                            <div className={"flex items-center text-2xl "}>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    size={"1x"}
                                    className={"mr-4"}
                                />
                                <h1>010-5163-8181</h1>
                            </div>
                            <h4 className={"text-2xl"}>
                                방문상담: 원내 3층 상담실
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={"flex items-center my-4 "}>
                    <Dot className={"mr-4"} />
                    <h1 className={"text-2xl"}>면회 안내</h1>
                </div>
                <hr className={"my-4"} />
                <div className={""}>
                    <ul>
                        <li>
                            코로나19로 인해 현재 병실 안에서 면회는 어렵습니다.
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default CounselVisitInfo
