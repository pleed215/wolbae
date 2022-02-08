import Seo from "../components/seo"
import * as React from "react"
import Layout from "../components/layout"
import Dot from "../images/icons/four-dot.svg"

const NonInsurance = () => {
    return (
        <Layout
            useHero
            menuInfo={"진료 안내 > 비급여 항목 공지"}
            pageTitle={"월배요양병원 비급여 항목"}
        >
            <Seo
                title={"미션과 비전"}
                description={"월배요양병원 미션과 비전"}
            />
            <div className={"mt-10 w-full"}>
                <div className={"flex items-center"}>
                    <Dot className={"mr-4"} />
                    <h1 className={"font-bold font-gothic text-3xl"}>
                        비급여 항목 공지
                    </h1>
                </div>
                <hr className={"my-4 border border-gray-400"} />
                <table className={"table-fixed border border-gray-400 text-sm"}>
                    <caption className="my-4 text-2xl">
                        비급여 항목 공지
                    </caption>
                    <thead
                        className={
                            "border border-gray-800 h-10 bg-emerald-700 text-white"
                        }
                    >
                        <tr>
                            <th className={"w-[5%] border border-gray-400"}>
                                순번
                            </th>
                            <th className={"border border-gray-400"}>항목</th>
                            <th className={"border border-gray-400"}>기준</th>
                            <th className={"border border-gray-400"}>
                                상한금액(원)
                            </th>
                        </tr>
                    </thead>
                    <tbody className={"non-insurance__table-body"}>
                        <tr>
                            <th>1</th>
                            <td className="title">일반진단서</td>
                            <td>
                                의료법 시행규칙 [별지 제5호2서식]에 따라 의사가
                                진찰하거나 검사한 결과를 종합하여 작성한
                                진단서를 말함
                            </td>
                            <td>20,000</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td className="title">인플루엔자 검사</td>
                            <td>
                                의료법제33조, 예방접종의실시기준 및 방법에관한
                                고시에 따라 환자가 고열,기침 증상이 보이면
                                검사하는 것을 의미함
                            </td>
                            <td>20,000</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td className="title">
                                근로능력평가용
                                <br />
                                진단서
                            </td>
                            <td>
                                국민기초생활 보장법 시행규칙 제35조 [별지
                                제6호서식]에 따라 의사가 근로능력 평가를 위해
                                발급하는 진단서를 말함
                            </td>
                            <td>10,000</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td className="title">사망진단서</td>
                            <td>
                                의료법 시행규칙 [별지 제6호의 서식]에 따라
                                의사가 환자의 사망을 의학적으로 확인 후 그
                                결과를 기록한 진단서를 말함
                            </td>
                            <td>10,000</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td className="title">입퇴원확인서</td>
                            <td>
                                환자의 인적사항(성명, 성별, 생년월일 등)과
                                입퇴원일을 기재하여, 입원사실에 대하여
                                행정적으로 발급하는 확인서를 말함 <br />
                                (입원사실증명서와 동일)
                            </td>
                            <td>3,000</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td className="title">통원확인서</td>
                            <td>
                                환자의 인적사항(성명, 성별, 생년월일 등)과 외래
                                진료일을 기재하여, 외래진료사실에 대하여
                                행정적으로 발급하는 확인서를 말함
                            </td>
                            <td>3,000</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td className="title">진료확인서</td>
                            <td>
                                환자의 인적사항(성명, 성별, 생년월일 등)과 특정
                                진료내역을 기재하여, 특정 진료사실에 대하여
                                행정적으로 발급하는 확인서를 말함
                                <br />
                                (방사선 치료, 검사 및 의약품 등)
                            </td>
                            <td>3,000</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td className="title">시체검안서</td>
                            <td>
                                의료법 시행규칙 [별지 제6호의 서식]에 따라
                                주검에 대하여 의학적으로 확인 후 그 결과를
                                기록하여 발급하는 증명서를 말하며, 출장비를
                                포함하지 않음
                                <br />* 검찰, 경찰의 업무 처리를 위한
                                시체검안서는 제외
                            </td>
                            <td>30,000</td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td className="title">장애인증명서</td>
                            <td>
                                소득세법 시행규칙 [별지 제38호 서식]에 따라
                                장애인공제 대상임을 나타내는 증명서를 말함
                            </td>
                            <td>1,000</td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td className="title">입원사실증명서</td>
                            <td>
                                환자의 인적사항과 입원일이 기재되어 있는
                                확인서로 입퇴원확인서 금액기준과 동일함
                            </td>
                            <td>
                                입,퇴원
                                <br />
                                확인서와 같음
                            </td>
                        </tr>
                        <tr>
                            <th>11</th>
                            <td className="title">
                                진료기록사본
                                <br />
                                (1~5매)
                            </td>
                            <td>
                                의료법 시행규칙 제15조제1항에 따른 진료기록부
                                등을 복사하는 경우를 말함(1~5매까지, 1매당 금액)
                            </td>
                            <td>1,000</td>
                        </tr>
                        <tr>
                            <th>12</th>
                            <td className="title">
                                진료기록사본
                                <br />
                                (6매 이상)
                            </td>
                            <td>
                                의료법 시행규칙 제15조제1항에 따른 진료기록부
                                등을 복사하는 경우를 말함(6매부터, 1매당 금액)
                            </td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <th>13</th>
                            <td className="title">진료기록영상(CD)</td>
                            <td>
                                영상진단, 내시경사진, 진료 중 촬영한 신체부위 등
                                영상 자료를 CD를 이용하여 복사하는 경우를 말함
                            </td>
                            <td>10,000</td>
                        </tr>
                        <tr>
                            <th>14</th>
                            <td className="title">제증명서 사본</td>
                            <td>
                                기존의 제증명서를 복사(재발급)하는 경우를 말함
                                <br />
                                (동시에 동일 제증명서를 여러통 발급받는 경우
                                최초 1통 이외 추가로 발급받는 제증명서도
                                사본으로 본다)
                            </td>
                            <td>1,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
export default NonInsurance
