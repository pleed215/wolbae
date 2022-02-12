import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FormEventHandler, useState } from "react"
import fetch from "isomorphic-fetch"

const CounselVisitInfo = () => {
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const [privateCheck, setPrivateCheck] = useState(false)

    const onSubmit: FormEventHandler<HTMLFormElement> = e => {
        if (!privateCheck) return

        e.preventDefault()
        const url =
            "https://script.google.com/macros/s/AKfycbzJ6l2-jmZidrb5at1Xr5uwLBLJHYFS49WxQHYF7ZOYQJhEIoDpi6ys1MdY5f2EYUo7jQ/exec"
        const formBody = new FormData()
        formBody.append("phone", phone)
        formBody.append("name", name)
        formBody.append("type", "온라인 상담")
        formBody.append("content", content)

        fetch(url, {
            method: "POST",
            body: formBody,
        })
            .then(res => res.json())
            .catch(() => alert("에러가 발생하였습니다."))
            .finally(() => {
                alert("신청이 완료 되었습니다.")
            })
    }
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
                    <h1 className={"text-2xl font-jua"}>
                        입원 상담 및 시간 안내
                    </h1>
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
                <h6 className={"text-md"}>
                    * 전화 문의나 하단의 온라인 상담도 가능하시지만, 상담에
                    한계가 있어 방문하시어 전문 상담가를 만나보시는 것이 가장
                    좋습니다.
                </h6>
                <h4 className={"text-xl font-bold mt-4"}>온라인 상담 신청</h4>
                <p className={"text-md"}>
                    최대한 빠른 시간 안에 회신 드리겠습니다.
                </p>
                <form
                    method={"POST"}
                    onSubmit={onSubmit}
                    className={"w-full mt-4"}
                >
                    <div
                        className={
                            "w-full mb-4 flex grid md:grid-cols-12 grid-cols-1 gap-4"
                        }
                    >
                        <input
                            name={"phone"}
                            type={"text"}
                            onChange={e => setPhone(e.target.value)}
                            placeholder={"연락처: 010-0000-0000"}
                            className={"md:col-span-6"}
                            required
                        />
                        <input
                            name={"name"}
                            type={"text"}
                            onChange={e => setName(e.target.value)}
                            placeholder={"보호자 성함"}
                            className={"md:col-span-6"}
                            required
                        />
                        <textarea
                            name={"content"}
                            onChange={e => setContent(e.target.value)}
                            placeholder={
                                "어르신의 상태, 관계, 질병 등을 최대한 자세하게 기술 부탁드립니다."
                            }
                            className={"md:col-span-12"}
                            required
                        />

                        <div className={"flex items-center md:col-span-12"}>
                            <input
                                checked={privateCheck}
                                type={"checkbox"}
                                onChange={e =>
                                    setPrivateCheck(e.target.checked)
                                }
                                id={"private-check"}
                                className={"outline-none"}
                            />
                            <label
                                htmlFor={"private-check"}
                                className={"ml-4 w-full"}
                            >
                                개인 정보 제공에 동의합니다.
                            </label>
                        </div>
                    </div>
                    <button
                        className={
                            "w-full text-center text-white bg-lime-700 py-3 rounded"
                        }
                    >
                        제출
                    </button>
                </form>
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
