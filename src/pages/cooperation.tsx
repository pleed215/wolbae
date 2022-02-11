import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"
import { StaticImage } from "gatsby-plugin-image"
import { FormEventHandler, useState } from "react"
import fetch from "isomorphic-fetch"

const Cooperation = () => {
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [content, setContent] = useState("")

    const onSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        const url =
            "https://script.google.com/macros/s/AKfycbzJ6l2-jmZidrb5at1Xr5uwLBLJHYFS49WxQHYF7ZOYQJhEIoDpi6ys1MdY5f2EYUo7jQ/exec"
        const formBody = new FormData()
        formBody.append("phone", phone)
        formBody.append("name", name)
        formBody.append("type", "장기요양센터 신청")
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
            useHero
            menuInfo={"공지 및 협력 > 대외 협력"}
            pageTitle={"대외 협력"}
        >
            <Seo
                title={"대외 협력"}
                description={"월배요양병원 대외협력 소개 페이지입니다."}
            />
            <div className={"mt-10"}>
                <div className={"w-full flex items-center text-2xl font-jua"}>
                    <Dot className={"mr-4 text-2xl"} />
                    <h1>
                        장기요양기관 장기요양 의사 소견서 및 방문간호 지시서
                        발급
                    </h1>
                </div>
                <hr className={"my-3"} />
                <form method={"POST"} onSubmit={onSubmit} className={"w-full"}>
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
                            placeholder={"장기 요양센터 이름"}
                            className={"md:col-span-6"}
                            required
                        />
                        <textarea
                            name={"content"}
                            onChange={e => setContent(e.target.value)}
                            placeholder={"신청 내용"}
                            className={"md:col-span-12"}
                            required
                        />
                    </div>
                    <button
                        className={
                            "w-full text-center text-white bg-lime-700 py-3 rounded"
                        }
                    >
                        제출
                    </button>
                </form>
                <h4 className={"text-md mb-8 mt-4"}>
                    방문간호 지시서나 장기 요양 의사 소견서가 필요한
                    장기요양센터 관계자분들께 장기요양소견사 방문간호 지시서를
                    발급해드리고 있습니다.
                    <br />
                    장기요양센터에서는 돌봄이 필요한 어르신들께 재가 돌봄
                    서비스나 주간보호 등의 서비스를 제공해드리고 있습니다. 저희
                    병원에서는 적극적으로 주변 장기요양기관과 협력하여
                    장기의사소견서 및 방문간호 지시서를 발급해드리고 있습니다.
                    <br />
                    도움이 필요하신 장기요양기관에서는 연락해주시어 협력 관계를
                    맺을 수 있도록 협조하겠습니다.
                </h4>

                <div className={"w-full flex items-center text-2xl font-jua"}>
                    <Dot className={"mr-4"} />
                    <h1>봉사활동 신청</h1>
                </div>
                <hr className={"my-3"} />
                <div
                    className={
                        "w-full grid sm:grid-cols-2 grid-cols-1 gap-4 mb-4"
                    }
                >
                    <StaticImage
                        src={"../images/volunteer1.jpg"}
                        alt={"공연 봉사"}
                    />
                    <StaticImage
                        src={"../images/volunteer2.jpg"}
                        alt={"이미용봉사 사진"}
                    />
                </div>
                <h4 className={"text-md line-through"}>
                    이미용 봉사 및 공연, 각 종 종교 봉사활동 신청을 받고
                    있습니다. 어르신들에게 따듯한 마음으로 봉사 해주실 분들의
                    연락을 기다리고 있습니다.
                </h4>
                <h4 className={"text-md"}>
                    현재 코로나로 인하여 봉사활동 신청 및 외부 활동이 불가한
                    상황입니다.
                </h4>
            </div>
        </Layout>
    )
}

export default Cooperation
