import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"

const RightsAndDuties = () => {
    return (
        <Layout
            useHero
            menuInfo={"진료 안내 > 환자의 권리와 의무"}
            pageTitle={"환자의 권리와 의무"}
        >
            <Seo
                title={"환자의 권리와 의무"}
                description={"월배요양병원 환자의 권리와 의무 고지"}
            />
            <div className={"mt-16 w-full flex flex-col"}>
                <div className={"flex items-center text-2xl font-gothic"}>
                    <Dot className={"mr-4"} />
                    <h2>환자의 권리</h2>
                </div>
                <hr className={"my-4"} />

                <div className={"md:grid-cols-4 grid-cols-2 grid gap-2 my-4"}>
                    <div
                        className={
                            "w-full border-t-2 border-b border-gray-600 flex flex-col"
                        }
                    >
                        <h6
                            className={
                                "text-center text-xl font-bold py-3 border-b border-gray-300 bg-lime-800 text-white"
                            }
                        >
                            진료 받을 권리
                        </h6>
                        <p className={"p-2"}>
                            환자는 자신의 건강보호를 위해 적절한 보건의료
                            서비스를 받고, 성별, 나이, 종교, 신분 경제적
                            사정등을 이유로 이를 침해 받지 아니하며, 의료인은
                            정당한 사유 없이 진료를 거부하지 못한다.
                        </p>
                    </div>
                    <div
                        className={
                            "w-full border-t-2 border-b border-gray-600 flex flex-col"
                        }
                    >
                        <h6
                            className={
                                "text-center text-xl font-bold py-3 border-b border-gray-300 bg-lime-800 text-white"
                            }
                        >
                            알권리 및 자기 결정권
                        </h6>
                        <p className={"p-2"}>
                            환자는 담당 의사, 간호사 등으로부터 질병상태,
                            치료방법, 의학적 예상결과(부작용 등) 진료 비용에
                            대해 충분한 설명을 듣고 자세히 물어 볼 수 있으며,
                            치료 방법에 대해 동의 여부를 결정할 권리를 가진다.
                        </p>
                    </div>
                    <div
                        className={
                            "w-full border-t-2 border-b border-gray-600 flex flex-col"
                        }
                    >
                        <h6
                            className={
                                "text-center text-xl font-bold py-3 border-b border-gray-300 bg-lime-800 text-white"
                            }
                        >
                            비밀을 보호 받을 권리
                        </h6>
                        <p className={"p-2"}>
                            환자는 진료와 관련된 신체상, 건강상 비밀을
                            보호받으며, 의료인과 의료기관은 환자의 동의를 받지
                            않거나 범죄수사 등 법률이 정한 경우 외에는 비밀을
                            누설, 발표하지 못한다.
                        </p>
                    </div>
                    <div
                        className={
                            "w-full border-t-2 border-b border-gray-600 flex flex-col"
                        }
                    >
                        <h6
                            className={
                                "text-center text-xl font-bold py-3 border-b border-gray-300 bg-lime-800 text-white"
                            }
                        >
                            상담 및 조정을 신청할 권리
                        </h6>
                        <p className={"p-2"}>
                            환자는 권리를 침해 받자 생명, 신체적, 금전적 피해가
                            발생한 경우, 한극의료 분쟁조정중재원(02-6210-0114,
                            www.k-medi.or.kr)에 상담 및 구제 신청을 할 수 있다.
                        </p>
                    </div>
                </div>
                <div className={"flex items-center text-2xl font-gothic"}>
                    <Dot className={"mr-4"} />
                    <h2>환자의 의무</h2>
                </div>
                <hr className={"my-4"} />
                <div className={"grid-cols-2 grid gap-2 my-4"}>
                    <div
                        className={
                            "w-full border-t-2 border-b border-gray-600 flex flex-col"
                        }
                    >
                        <h6
                            className={
                                "text-center text-xl font-bold py-3 border-b border-gray-300 bg-lime-800 text-white"
                            }
                        >
                            의료인에 대한 존중 의무
                        </h6>
                        <p className={"p-2"}>
                            환자는 자신의 건강 관련 정보를 의료인에게 정확히
                            알리고, 의료인의 치료 계획에 대해 신뢰하고
                            존중하여야 한다. 부정한 방법으로 진료를 받지 않을
                            의무
                        </p>
                    </div>
                    <div
                        className={
                            "w-full border-t-2 border-b border-gray-600 flex flex-col"
                        }
                    >
                        <h6
                            className={
                                "text-center text-xl font-bold py-3 border-b border-gray-300 bg-lime-800 text-white"
                            }
                        >
                            의료인에 대한 신뢰 의무
                        </h6>
                        <p className={"p-2"}>
                            환자는 진료 전에 본인의 신분을 밝혀야 하고, 다른
                            사람의 명의로 진료를 받는 등 거짓이나 부정한
                            방법으로 진료를 받지 아니한다.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default RightsAndDuties
