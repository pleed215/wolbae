import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Dot from "../images/icons/four-dot.svg"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHeartbeat,
    faHospitalUser,
    faUserMd,
} from "@fortawesome/free-solid-svg-icons"

const MissionVision = () => {
    return (
        <Layout
            useHero
            menuInfo={"병원 소개 > 미션과 비전"}
            pageTitle={"미션과 비전"}
        >
            <Seo
                title={"미션과 비전"}
                description={"월배요양병원 미션과 비전"}
            />
            <div className={"mt-10 flex items-center"}>
                <Dot className={"mr-2"} />
                <h1 className={"font-gothic font-bold text-3xl"}>
                    미션(Mission)
                </h1>
            </div>
            <div className={"mt-5 w-full grid relative"}>
                <StaticImage
                    src={"../images/mission-vision-01.jpg"}
                    alt={"월배요양병원 미션과 비전"}
                    layout={"fullWidth"}
                    className={"max-h-[300px]"}
                    style={{ gridArea: "1/1" }}
                />
                <div
                    className={"w-full h-full absolute grid place-items-center"}
                    style={{ gridArea: "1/1" }}
                >
                    <h2
                        className={
                            "font-gothic font-bold text-4xl mx-auto bg-gray-100/50 p-4 break-words text-center"
                        }
                    >
                        "<span className={"text-orange-500"}>사랑</span>과{" "}
                        <span className={"text-orange-500"}>정성</span>으로
                        치료되는 병원"
                    </h2>
                </div>
            </div>
            <div className={"mt-20 flex items-center"}>
                <Dot className={"mr-2"} />
                <h1 className={"font-gothic font-bold text-3xl"}>
                    비전(Vision)
                </h1>
            </div>
            <div
                className={
                    "flex flex-wrap justify-between items-center w-full pt-4"
                }
            >
                <div
                    className={
                        "p-4 rounded-full min-w-[200px] w-1/4 aspect-1 bg-emerald-700 flex flex-col items-center justify-center mb-4"
                    }
                >
                    <FontAwesomeIcon
                        icon={faHospitalUser}
                        size={"3x"}
                        className={"text-white"}
                    />
                    <h4
                        className={
                            "text-center break-words text-2xl text-white font-jua mt-4"
                        }
                    >
                        기본에 충실한 병원
                    </h4>
                </div>
                <div
                    className={
                        "p-4 rounded-full min-w-[200px] w-1/4 aspect-1 bg-lime-500 flex flex-col items-center justify-center mb-4"
                    }
                >
                    <FontAwesomeIcon
                        icon={faUserMd}
                        size={"3x"}
                        className={"text-white"}
                    />
                    <h4
                        className={
                            "break-words text-center text-2xl text-white font-jua mt-4"
                        }
                    >
                        가족처럼 섬기는 병원
                    </h4>
                </div>
                <div
                    className={
                        "p-4 rounded-full min-w-[200px] w-1/4 aspect-1 bg-emerald-700 flex flex-col items-center justify-center mb-4"
                    }
                >
                    <FontAwesomeIcon
                        icon={faHeartbeat}
                        size={"3x"}
                        className={"text-white"}
                    />
                    <h4
                        className={
                            "text-2xl text-white font-jua mt-4 break-words text-center"
                        }
                    >
                        서로 사랑하고 아껴주는 병원
                    </h4>
                </div>
            </div>
            <div className={"mt-20 flex items-center"}>
                <Dot className={"mr-2"} />
                <h1 className={"font-gothic font-bold text-3xl"}>
                    미션 비전 선포식
                </h1>
            </div>

            <div className={"font-gothic md:flex block mt-4"}>
                <div className={"text-md max-w-xl break-words"}>
                    <p className={"text-gray-500"}>
                        우리 월배요양병원의 핵심 가치는{" "}
                        <span className={"font-bold text-orange-400"}>
                            “사랑”
                        </span>
                        과{" "}
                        <span className={"font-bold text-orange-400"}>
                            “정성“
                        </span>
                        입니다.
                        <br />이 두가지 핵심가치로 어르신들의 몸과 마음이{" "}
                        <span className={"font-bold text-orange-400"}>
                            “치유”
                        </span>
                        될 수 있도록 노력하고 있습니다.
                        <br />
                        이러한 핵심 가치를 달성하기 위해 월배요양병원은{" "}
                        <span className={"font-bold text-orange-400"}>
                            “사랑과 정성으로 치유되는 병원“
                        </span>
                        을 미션으로 하였습니다.
                        <br />
                        또한 이러한 미션을 수행하기 위해 세 가지 비전을
                        설정하였습니다.
                    </p>
                    <h6 className={"my-3 font-bold text-xl text-orange-400"}>
                        첫 번째는 “기본에 충실한 병원”입니다.
                    </h6>
                    <p className={"font-thin text-gray-600"}>
                        요양병원 입원 환자분들에게 기본이 되는 진료 서비스, 간호
                        서비스, 간병 서비스, 식사, 기본 적인 재활 프로그램.
                        <br />
                        이러한 것들에 정성을 다하는 병원이 되도록 노력하고
                        있습니다.
                    </p>
                    <h6 className={"my-3 font-bold text-xl text-orange-400"}>
                        두번째는 “가족처럼 섬기는 병원”입니다.
                    </h6>
                    <p className={"font-thin text-gray-600"}>
                        어르신들이 대부분의 시간을 병원에서 보호자 없이 지내시는
                        시간이 많습니다.
                        <br />
                        어르신들에게 정서적 지지와 우울감 해소를 위해 저희 병원
                        모든 직원들이 힘쓰고 있습니다.
                        <br />
                        또한, 봉사 단체와 연계하여 각종 봉사를 어르신들에게
                        해드리며 친절과 봉사하고 있습니다.
                        <br />
                    </p>
                    <h6 className={"my-3 font-bold text-xl text-orange-400"}>
                        세번째는 “서로 사랑하고 아껴주는 병원”입니다.
                    </h6>
                    <p className={"font-thin text-gray-600"}>
                        각 부서 직원 간은 물론이고, 진료부, 간호부, 간병사,
                        진료지원 부서, 원내 식당 식구들 모두 서로 아껴주며,
                        <br />
                        병원 발전을 위해서 노력하고 있는 병원이 되도록 노력하고
                        있습니다.
                        <br />
                        저희 병원의 미션 비전을 모든 직원들에게 알리고,
                        <br />
                        이를 달성하기 위해 저희 병원에서는 미션 비전 선포식을
                        진행하였습니다.
                    </p>
                </div>
                <div className={"flex-auto"}>
                    <StaticImage
                        src={"../images/proclaim.jpg"}
                        alt={"월배요양병원 미션비전 선포식"}
                        layout={"fullWidth"}
                    />
                </div>
            </div>
        </Layout>
    )
}
export default MissionVision
