import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAmbulance, faHospitalAlt } from "@fortawesome/free-solid-svg-icons"
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons"

const Greeting = () => {
    return (
        <Layout useHero menuInfo={"병원 소개 > 인사말"} pageTitle={"인사말"}>
            <Seo title={"인사말"} description={"인사말"} />
            <div className={"md:flex block"}>
                <div className={"md:max-w-max w-full"}>
                    <div className={"py-10 border-b border-gray-400"}>
                        <h2 className={"text-3xl font-gothic font-bold mb-8"}>
                            안녕하십니까?
                            <br />
                            월배요양병원 홈페이지를 찾아주셔서 감사합니다.
                        </h2>
                        <h4 className={"font-gothic font-normal text-xl"}>
                            월배요양병원에 입원하시는 모든 어르신들에게 최상의
                            <br />
                            요양 및 진료, 간병, 간호 서비스를 받으실 수 있도록
                            최선을 다하겠습니다.
                            <br />
                            감사합니다.
                        </h4>

                        <p className={"text-xl text-right text-gray-500"}>
                            월배요양병원장<i>이 은 덕</i>
                        </p>
                    </div>
                    <div className={"py-10 "}>
                        <div
                            className={
                                "flex py-8 border-b border-dashed border-gray-400"
                            }
                        >
                            <div
                                className={
                                    "w-72 aspect-1 rounded-full mr-8 bg-emerald-700 flex items-center justify-center"
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faHospitalAlt}
                                    size={"3x"}
                                    className={"text-white"}
                                />
                            </div>
                            <div>
                                <h4 className={"text-xl font-bold mb-4"}>
                                    어르신들을 위한 병원
                                </h4>
                                <p className={"text-gray-500"}>
                                    부모님을 모시는 마음으로 사랑과 정성으로
                                    최선을 다하는 병원입니다.양한방 협진
                                    시스템과 노인요양에 경험이 풍부한 간호진,
                                    의료진으로 최고의 노인 요양서비스를 제공하고
                                    있습니다.
                                </p>
                            </div>
                        </div>
                        <div
                            className={
                                "flex py-8 border-b border-dashed border-gray-400"
                            }
                        >
                            <div
                                className={
                                    "w-72 aspect-1 rounded-full mr-8 bg-lime-500 flex items-center justify-center"
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faAmbulance}
                                    size={"3x"}
                                    className={"text-white"}
                                />
                            </div>
                            <div>
                                <h4 className={"text-xl font-bold mb-4"}>
                                    접근이 편리한 원원
                                </h4>
                                <p className={"text-gray-500"}>
                                    월배시장 맞은 편에 위치하고 있으며, 월배역과
                                    진천역에 가깝습니다. 도심에 위치하고 있어
                                    교통도 편리합니다.대구광역시 달서구 월배로
                                    119 KS빌딩 3,6,7,8층에 위치해 있습니다.
                                </p>
                            </div>
                        </div>
                        <div
                            className={
                                "flex py-8 border-b border-dashed border-gray-400"
                            }
                        >
                            <div
                                className={
                                    "w-72 aspect-1 rounded-full mr-8 bg-emerald-700 flex items-center justify-center"
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faAccessibleIcon}
                                    size={"3x"}
                                    className={"text-white"}
                                />
                            </div>
                            <div>
                                <h4 className={"text-xl font-bold mb-4"}>
                                    최상의 서비스가 있는 병원
                                </h4>
                                <p className={"text-gray-500"}>
                                    어르신들을 위해 봉사 단체와 협업하여
                                    미용봉사, 공연봉사, 인지 향상 교육 봉사 등을
                                    하고 있습니다. 또한, 우수한 식자재,
                                    영양관리로 최상의 영양서비스 제공을 위해
                                    노력하고 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"max-w-sm w-full ml-4 mt-20"}>
                    <StaticImage
                        src={"../images/int-img-01.jpg"}
                        alt={"월배요양병원 인사말 사진 1"}
                        layout={"fullWidth"}
                        className={"mb-10"}
                    />
                    <StaticImage
                        src={"../images/int-img-02.jpg"}
                        alt={"월배요양병원 인사말 사진 2"}
                        layout={"fullWidth"}
                    />
                </div>
            </div>
        </Layout>
    )
}
export default Greeting
