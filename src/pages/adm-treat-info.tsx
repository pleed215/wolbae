import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCalendarCheck,
    faCalendarDay,
    faFileInvoice,
    faHospitalUser,
    faPeopleCarry,
    faStethoscope,
    faSyringe,
} from "@fortawesome/free-solid-svg-icons"
import { faMeetup } from "@fortawesome/free-brands-svg-icons"

const AdmTreatInfo = () => {
    return (
        <Layout
            useHero
            menuInfo={"진료 안내 > 입원 및 진료 정보"}
            pageTitle={"입원 및 진료 정보"}
        >
            <Seo
                title={"입원 및 진료 정보"}
                description={"월배요양병원 입원 정보 설명"}
            />
            <div className={"mt-4 w-full"}>
                <div className={"flex items-center text-2xl"}>
                    <Dot className={"mr-4"} />
                    <h1>입원 대상 안내</h1>
                </div>
                <hr className={"my-4"} />
                <h4>
                    의료법에 제36조 제3호에 따라 요양병원에는 노인성질환자,
                    만성질환자, 외과적 수술 후 또는 상해 후 회복 기간인 분들이
                    입원 가능합니다. 질환 별로는 다음과 같습니다.
                </h4>
                <p
                    className={
                        "p-2 text-lg text-white font-bold bg-lime-700 mt-3"
                    }
                >
                    질환 별 입원대상
                </p>
                <ul className={"border border-gray-300 mb-8"}>
                    <li className={"list-style"}>
                        뇌혈관 질환(중풍)으로 인한 편마비 또는 후유증이 있으신
                        분
                    </li>
                    <li className={"list-style"}>
                        치매나 노인성 질환들로 인하여 집에서 간병이 어려우신 분
                    </li>
                    <li className={"list-style"}>
                        기력이 많이 떨어지셔서 집에서 식사를 잘 못하시는 분
                    </li>
                    <li className={"list-style"}>
                        욕창 및 압박 궤양 등이 발생하여 집에서 관리가 어려우신
                        분
                    </li>
                    <li className={"list-style"}>
                        대학 병원이나 병원에 장기간 입원으로 경제적으로 부담이
                        있으신 분
                    </li>
                    <li className={"list-style"}>
                        수술 등(관절, 정형외과적, 기타 수술)으로 인하여
                        회복기간이 필요하신 분
                    </li>
                </ul>
                <div className={"flex items-center text-2xl"}>
                    <Dot className={"mr-4"} />
                    <h1>접수 시간 안내</h1>
                </div>
                <hr className={"my-4"} />
                <div className={"grid md:grid-cols-3 grid-cols-1 gap-4 mb-1"}>
                    <div className={"w-full"}>
                        <p
                            className={
                                "py-2 text-center bg-lime-700 text-white text-xl font-bold"
                            }
                        >
                            평일
                        </p>
                        <p
                            className={
                                "py-2 text-center text-lg border border-gray-300"
                            }
                        >
                            오전 09:00 ~ 오후 05:30
                        </p>
                    </div>
                    <div className={"w-full"}>
                        <p
                            className={
                                "py-2 text-center bg-lime-700 text-white text-xl font-bold"
                            }
                        >
                            토요일
                        </p>
                        <p
                            className={
                                "py-2 text-center text-lg border border-gray-300"
                            }
                        >
                            오전 09:00 ~ 오후 12:30
                        </p>
                    </div>
                    <div className={"w-full"}>
                        <p
                            className={
                                "py-2 text-center bg-lime-700 text-white text-xl font-bold"
                            }
                        >
                            점심 시간
                        </p>
                        <p
                            className={
                                "py-2 text-center text-lg border border-gray-300"
                            }
                        >
                            정오(12:00) ~ 오후 01:30
                        </p>
                    </div>
                </div>
                <h4 className={"mb-4 text-lg font-bold"}>
                    토요일, 일요일, 공휴일은 외래 휴진입니다. 담당의사의 사정
                    또는 휴가 일정이 있을 수 있으니 반드시 전화로 문의 주신 후에
                    방문 부탁드립니다.
                </h4>
                <div className={"flex items-center text-2xl"}>
                    <Dot className={"mr-4"} />
                    <h1>병동 식사 시간 안내</h1>
                </div>
                <hr className={"my-4"} />
                <div className={"grid md:grid-cols-3 grid-cols-1 gap-4 mb-4"}>
                    <div className={"w-full"}>
                        <p
                            className={
                                "py-2 text-center bg-lime-700 text-white text-xl font-bold"
                            }
                        >
                            조식
                        </p>
                        <p
                            className={
                                "py-2 text-center text-lg border border-gray-300"
                            }
                        >
                            오전 07:00 ~ 오전 08:00
                        </p>
                    </div>
                    <div className={"w-full"}>
                        <p
                            className={
                                "py-2 text-center bg-lime-700 text-white text-xl font-bold"
                            }
                        >
                            중식
                        </p>
                        <p
                            className={
                                "py-2 text-center text-lg border border-gray-300"
                            }
                        >
                            정오(12:00) ~ 오후 01:00
                        </p>
                    </div>
                    <div className={"w-full"}>
                        <p
                            className={
                                "py-2 text-center bg-lime-700 text-white text-xl font-bold"
                            }
                        >
                            석식
                        </p>
                        <p
                            className={
                                "py-2 text-center text-lg border border-gray-300"
                            }
                        >
                            오후 05:00 ~ 오후 06:00
                        </p>
                    </div>
                </div>
                <div className={"flex items-center text-2xl"}>
                    <Dot className={"mr-4"} />
                    <h1>입원 절차 안내</h1>
                </div>
                <hr className={"mt-3 mb-6"} />
                <div
                    className={
                        "grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4 mb-3"
                    }
                >
                    <div className={"adm-step"}>
                        <div className={"number"}>01</div>
                        <FontAwesomeIcon
                            icon={faCalendarCheck}
                            size={"2x"}
                            className={"mb-3"}
                        />
                        입원 상담 예약
                    </div>
                    <div className={"adm-step"}>
                        <div className={"number"}>02</div>
                        <FontAwesomeIcon
                            icon={faPeopleCarry}
                            size={"2x"}
                            className={"mb-3"}
                        />
                        입원 상담
                    </div>
                    <div className={"adm-step"}>
                        <div className={"number"}>03</div>
                        <FontAwesomeIcon
                            icon={faCalendarDay}
                            size={"2x"}
                            className={"mb-3"}
                        />
                        입원 날짜 결정
                    </div>
                    <div className={"adm-step"}>
                        <div className={"number"}>04</div>
                        <FontAwesomeIcon
                            icon={faFileInvoice}
                            size={"2x"}
                            className={"mb-3"}
                        />
                        접수
                    </div>
                    <div className={"adm-step"}>
                        <div className={"number"}>05</div>
                        <FontAwesomeIcon
                            icon={faStethoscope}
                            size={"2x"}
                            className={"mb-3"}
                        />
                        병력 청취 및<br />
                        입원 서류 결정
                    </div>
                    <div className={"adm-step"}>
                        <div className={"number"}>06</div>
                        <FontAwesomeIcon
                            icon={faSyringe}
                            size={"2x"}
                            className={"mb-3"}
                        />
                        입원 검사
                    </div>
                    <div className={"adm-step"}>
                        <div className={"number"}>07</div>
                        <FontAwesomeIcon
                            icon={faHospitalUser}
                            size={"2x"}
                            className={"mb-3"}
                        />
                        입원
                    </div>
                </div>
                <h4 className={"text-lg font-bold"}>
                    입원 상담 후 입원을 결정하신 후에 어르신의 건강 상태에 따라
                    타병원 진단 및 치료 권유가 있을 수 있습니다.
                </h4>
            </div>
        </Layout>
    )
}

export default AdmTreatInfo
