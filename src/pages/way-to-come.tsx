import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MapMarker, Map } from "react-kakao-maps-sdk"
import { useState } from "react"
import Dot from "../images/icons/four-dot.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBusAlt,
    faMapMarkerAlt,
    faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { Helmet } from "react-helmet"

const WayToCome = () => {
    /*const [ready, setReady] = useState(false)
    React.useEffect(() => {
        if (window !== undefined && document !== undefined) {
            const script = document.createElement("script")
            script.defer = true
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=4fc661cc5efee39dc7d901aabff3c1b9&autoload=false`
            document.body.appendChild(script)
            setReady(true)
        }
    }, [])*/
    return (
        <>
            <Layout
                useHero
                menuInfo={"병원 소개 > 찾아 오시는 길"}
                pageTitle={"찾아오시는 길"}
            >
                <Seo
                    title={"찾아오시는 길"}
                    description={"대구 달서구 월배로 119 월배요양병원"}
                />

                <div className={"w-full pt-20"}>
                    <div className={"flex items-center mb-10"}>
                        <Dot className={"mr-4"} />
                        <h1 className={"font-jua text-3xl"}>
                            월배요양병원 찾아 오시는 길을 안내해드립니다.
                        </h1>
                    </div>
                    <div
                        className={
                            "lg:flex block justify-between items-center w-full p-2 bg-lime-600 text-white text-xl font-jua"
                        }
                    >
                        <div className={"flex items-center"}>
                            <FontAwesomeIcon
                                icon={faPhone}
                                size={"sm"}
                                className={"mr-4"}
                            />
                            <h1>010-5163-8181(24시 상담)</h1>
                        </div>
                        <h1>
                            대구시 달서구 월배로 119 3층 월배요양병원 (월배시장
                            건너편)
                        </h1>
                    </div>
                    <Map
                        center={{ lat: 35.81516, lng: 128.52734 }}
                        className={"w-full h-[360px]"}
                    >
                        <MapMarker
                            position={{ lat: 35.81516, lng: 128.52734 }}
                            title={"월배요양병원"}
                            clickable={true}
                            image={{
                                src: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200122_39%2F1579667705701wq1JA_JPEG%2FS7nFDmVITzdWvSolcswLwSAU.jpg",
                                size: { width: 110, height: 140 },
                                options: {
                                    className: "rounded",
                                },
                            }}
                        />
                    </Map>
                </div>
                <div className={"mt-10 md:flex block w-full"}>
                    <div className={"w-full md:border-r border-gray-400 mb-4"}>
                        <h4 className={"text-lg font-gothic font-bold mb-4"}>
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                size={"sm"}
                                className={"mr-2"}
                            />
                            CONTACT
                        </h4>
                        <p className={"text-md font-thin"}>
                            주소: 대구광역시 달서구 월배로 119 KS빌딩 3층
                            월배요양병원
                            <br />
                            E-mail: wb6320808@naver.com
                            <br />
                            상담문의: 053-632-0808
                            <br />
                            FAX: 053-634-0011
                        </p>
                    </div>
                    <div className={"w-full md:pl-4"}>
                        <h4 className={"text-lg font-gothic font-bold mb-4"}>
                            <FontAwesomeIcon
                                icon={faBusAlt}
                                size={"sm"}
                                className={"mr-2"}
                            />
                            오시는길
                        </h4>
                        <p className={"text-md font-thin"}>
                            지하철 이용시: 진천역 4번출구 방향, 월배역 1번 출구
                            방향 200m 위치
                            <br />
                            버스이용시: 600, 650, 651, 836, 달서5, 달성2.
                            월배시장 건너 정류장 하차
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default WayToCome
