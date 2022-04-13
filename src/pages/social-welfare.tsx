import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"

const SocialWelfare = () => {
    return (
        <Layout
            useHero
            menuInfo={"프로그램 소개 > 사회복지 프로그램"}
            pageTitle={"인지기능 프로그램"}
        >
            <Seo
                title={"인지기능 프로그램"}
                description={
                    "월배요양병원 인지기능 개선 프로그램 소개 페이지입니다."
                }
            />
            <div className={"mt-10"}>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>건강 체조</h1>
                </div>
                <hr className={"my-4"} />
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>미술 치료</h1>
                </div>
                <hr className={"my-4"} />{" "}
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>신체 활동</h1>
                </div>
                <hr className={"my-4"} />{" "}
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>영화 보기</h1>
                </div>
                <hr className={"my-4"} />{" "}
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>인지 개선 활동</h1>
                </div>
                <hr className={"my-4"} />{" "}
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>작업 치료</h1>
                </div>
                <hr className={"my-4"} />
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                    <div className={"h-64 w-full bg-amber-100"}></div>
                </div>
            </div>
        </Layout>
    )
}

export default SocialWelfare
