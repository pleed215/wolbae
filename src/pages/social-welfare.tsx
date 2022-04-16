import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dot from "../images/icons/four-dot.svg"
import { StaticImage } from "gatsby-plugin-image"

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
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_health1.jpg"}
                            alt={"건강 체조 사진"}
                            layout={"fullWidth"}
                            className={"w-full h-full"}
                        />
                    </div>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_health2.jpg"}
                            alt={"건강 체조 사진2"}
                            className={"w-full h-full"}
                        />
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>미술 치료</h1>
                </div>
                <hr className={"my-4"} />{" "}
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_misul1.jpg"}
                            alt={"미술 치료 사진1"}
                            className={"w-full h-full"}
                        />
                    </div>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_misul2.jpg"}
                            alt={"미술 치료 사진2"}
                            className={"w-full h-full"}
                        />
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>신체 활동</h1>
                </div>
                <hr className={"my-4"} />{" "}
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_active1.jpg"}
                            alt={"활동 치료"}
                            className={"w-full h-full"}
                        />
                    </div>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_active2.jpg"}
                            alt={"활동 치료2"}
                            className={"w-full h-full"}
                        />
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>영화 보기</h1>
                </div>
                <hr className={"my-4"} />{" "}
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_movie1.jpg"}
                            alt={"영화 보기"}
                            className={"w-full h-full"}
                        />
                    </div>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_movie2.jpg"}
                            alt={"영화 보기2"}
                            className={"w-full h-full"}
                        />
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>인지 개선 활동</h1>
                </div>
                <hr className={"my-4"} />{" "}
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_inc1.jpg"}
                            alt={"인지기능 개선활동"}
                            className={"w-full h-full"}
                        />
                    </div>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_inc2.jpg"}
                            alt={"인지기능 개선활동2"}
                            className={"w-full h-full"}
                        />
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <Dot className={"mr-2"} />
                    <h1 className={"font-bold text-2xl"}>작업 치료</h1>
                </div>
                <hr className={"my-4"} />
                <div className={"grid sm:grid-cols-2 grid-cols-1 gap-4 my-8"}>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_work1.jpg"}
                            alt={"작업 치료"}
                            className={"w-full h-full"}
                        />
                    </div>
                    <div className={"h-64 w-full bg-amber-100"}>
                        <StaticImage
                            src={"../images/cog_work2.jpg"}
                            alt={"작업 치료2"}
                            className={"w-full h-full"}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SocialWelfare
