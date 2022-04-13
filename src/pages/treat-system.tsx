import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"

const TreatSystem = () => {
    return (
        <Layout
            useHero
            menuInfo={"프로그램 소개 > 치료 프로그램"}
            pageTitle={"치료 프로그램"}
        >
            <Seo
                title={"치료프로그램"}
                description={"월배요양병원 치료프로그램 소개 페이지입니다."}
            />
            <div className={"mt-10"}>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>전문의 진료</h1>
                </div>
                <hr className={"my-4"} />
                <div className={"w-full grid sm:grid-cols-2 grid-cols-1 gap-4"}>
                    <div className={"bg-blue-100 w-full h-72"}></div>
                    <div className={"bg-blue-100 w-full h-72"}></div>
                </div>
                <h1>
                    매일 전문의 회진으로 어르신들에게 세심하게 진료하고 있어
                    원내에서 가능한 치료는 타병원 모시고 가실 필요가 없이 바로
                    가능합니다. 어르신들의 상태를 전문의가 자주 확인할 수 있기
                    때문에 본원에서 할 수 없는 치료는 바로 상급 병원 진료가
                    가능하도록 진료의뢰서를 작성해드립니다.
                </h1>
                <div className={"flex items-center mt-10"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>대표 진료 질환들</h1>
                </div>
                <hr className={"my-4"} />
                <div
                    className={
                        "w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
                    }
                >
                    <div className={"bg-blue-100 w-full h-72"}>
                        치매 환자 관리
                        <div>
                            치매 어르신들을 집에서 관리하시기 매우 어렵습니다.
                            때에 맞춰 어르신들에게 치매약 복용토록 해드리고,
                            인지기능 개선을 위해 다양한 활동을 할 수 있도록
                            해드리고 있습니다.
                        </div>
                    </div>
                    <div className={"bg-blue-100 w-full h-72"}>
                        노쇠 환자 관리
                        <div>
                            고령의 어르신 또는 만성질환으로 식사를 잘 못하시고
                            기력이 떨어지신 어르신들은 전문적인 관리가
                            필요합니다. 어르신들이 식사를 잘 못하시고 기력이
                            떨어지셨으면 지체 없이 병원 치료를 받는 것이
                            좋습니다.
                        </div>
                    </div>

                    <div className={"bg-blue-100 w-full h-72"}>
                        욕창 환자 관리
                        <div>
                            와상 상태가 지속되면 특정 부위(꼬리뼈, 뒷꿈치,
                            엉치뼈 등)의 압박 및 괴사가 진행 될 수 있습니다.
                            호발부위가 벌겋게 되는 양상이 보이시면 지체 없이
                            욕창 치료를 위해 입원하시는 것이 좋습니다.
                        </div>
                    </div>
                    <div className={"bg-blue-100 w-full h-72"}>
                        와상 환자 관리
                        <div>
                            기력이 쇠하거나 만성질병, 통증, 뇌혈관 질환 등으로
                            거동이 힘들게 되시면 와상상태로 가기 쉬운데, 와상
                            상태는 지속적인 관리가 필요합니다. 주기적인 체위
                            변경과 좋은 영양상태가 필요합니다.
                        </div>
                    </div>
                    <div className={"bg-blue-100 w-full h-72"}>
                        수술 후 통증 관리
                        <div>
                            수술 후는 매우 취약한 상태입니다. 특히 어르신들은
                            더욱 더 그렇습니다. 요양과 통증 치료가 모두 필요하실
                            수 있습니다.
                        </div>
                    </div>

                    <div className={"bg-blue-100 w-full h-72"}>
                        뇌혈관 질환 후유증
                        <div>
                            흔히 말하는 중풍입니다. 중풍 후유증으로 인해
                            팔다리가 저리거나 거동이 어려워서 일상생활이 힘드신
                            어르신들은 요양과 치료가 모두 필요하실 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TreatSystem
