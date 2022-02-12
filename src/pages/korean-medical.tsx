import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"
import { StaticImage } from "gatsby-plugin-image"

const KoreanMedical = () => {
    return (
        <Layout
            useHero
            menuInfo={"프로그램 소개 > 한방진료 프로그램"}
            pageTitle={"한방진료 프로그램"}
        >
            <Seo
                title={"한방진료 프로그램"}
                description={"월배요양병원 한방진료 소개 페이지입니다."}
            />
            <div className={"mt-10"}>
                <div className={"w-full flex items-center"}>
                    <Dot className={"mr-4"} />
                    <h2 className={"text-2xl font-jua"}>한방진료</h2>
                </div>
                <hr className={"my-3"} />
                <div className={"grid grid-cols-12 md:gap-4 gap-2 mb-4"}>
                    <div
                        className={"grid place-items-center col-span-4 rounded"}
                    >
                        <StaticImage
                            src={"../images/acu.jpg"}
                            alt={"한방진료 침술"}
                            style={{ gridArea: "1/1" }}
                            className={"h-full"}
                        />
                        <div
                            className={"bg-white/50 text-xl font-bold z-10 p-4"}
                            style={{ gridArea: "1/1" }}
                        >
                            <h4>침술</h4>
                        </div>
                    </div>
                    <div
                        className={"grid place-items-center col-span-5 rounded"}
                    >
                        <StaticImage
                            src={"../images/moxi.jpg"}
                            alt={"한방진료 구술"}
                            style={{ gridArea: "1/1" }}
                            className={"h-full"}
                        />
                        <div
                            className={"bg-white/50 text-xl font-bold z-10 p-4"}
                            style={{ gridArea: "1/1" }}
                        >
                            <h4>구술(뜸)</h4>
                        </div>
                    </div>
                    <div
                        className={"grid place-items-center col-span-3 rounded"}
                    >
                        <StaticImage
                            src={"../images/cup.jpg"}
                            alt={"한방진료 부항술"}
                            style={{ gridArea: "1/1" }}
                            className={"h-full"}
                        />
                        <div
                            className={"bg-white/50 text-xl font-bold z-10 p-4"}
                            style={{ gridArea: "1/1" }}
                        >
                            <h4>부항</h4>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        "md:w-2/3 w-full bg-gray-200 text-center font-bold text-xl mx-auto mt-4 rounded p-4"
                    }
                >
                    <h4>"한방진료는 정성입니다."</h4>
                    <p className={"font-thin text-lg text-left mt-4"}>
                        한방진료 시행에 앞서 가장 먼저 필요한 것은 어르신들에게
                        물어 보고, 맥을 짚기도, 아픈 곳을 눌러보기도, 얼굴 색,
                        설태 등 관찰할 것이 많습니다. 그만큼 한방진료 실시에
                        앞서 어르신들을에게 주의와 관심을 기울여야 합니다.
                        <br />
                        시침을 하거나 부항, 뜸을 시술하기 전에 반드시 어르신의
                        상태, 반응 정도와 실시 후 어르신의 만족도를 살펴보아야
                        하는, 그만큼 정성이 많이 필요한 진료입니다.
                        <br />
                        저희 월배요양병원에서는 어르신들에게 최선의 한방진료를
                        제공하여 어르신의 건강관리, 빠른 일상복귀 협조를 위해
                        노력하고 있습니다.
                    </p>
                </div>
                <StaticImage
                    src={"../images/herbal.jpg"}
                    alt={"한약재"}
                    layout={"fullWidth"}
                    className={"max-h-60 mt-4"}
                />
            </div>
        </Layout>
    )
}

export default KoreanMedical
