import { graphql, navigate, PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Mdx } from "../../graphql-types"
import { MDXRenderer } from "gatsby-plugin-mdx"

type MarkdownType = {
    mdx: Mdx
}

const NoticeDetail: React.FC<PageProps<MarkdownType, { slug: string }>> = ({
    data: { mdx },
    pageContext: { slug },
}) => {
    const onClickBack = () => {
        navigate(-1)
    }
    return (
        <Layout
            useHero
            menuInfo={`공지 및 협력 > 공지사항 > ${mdx.frontmatter?.title}`}
            pageTitle={`공지사항`}
        >
            <Seo title={"공지사항"} description={"월배요양병원 공지사항"} />
            <div className={"mt-10 w-full"}>
                <button
                    className={"text-gray-500 text-sm mb-2"}
                    onClick={onClickBack}
                >
                    &lt; 뒤로가기
                </button>
                <div className={"w-full text-xl text-white bg-lime-700 p-2"}>
                    <h1 className={"text-left"}>
                        [공지] {mdx.frontmatter?.title}
                    </h1>
                </div>
                <div
                    className={"flex justify-between items-center text-md p-2"}
                >
                    <h4 className={"text-gray-600"}>
                        {mdx.frontmatter?.subtitle}
                    </h4>
                    <h6>
                        작성자: {mdx.frontmatter?.author}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 날짜:
                        {mdx.frontmatter?.date}
                    </h6>
                </div>
                <hr className={"mb-3"} />
                <div className={"markdown w-full"}>
                    <MDXRenderer title={mdx.frontmatter?.title}>
                        {mdx.body}
                    </MDXRenderer>
                </div>
            </div>
        </Layout>
    )
}

export default NoticeDetail

export const query = graphql`
    query ($slug: String) {
        mdx(fields: { slug: { eq: $slug } }) {
            id
            body
            frontmatter {
                title
                subtitle
                date(formatString: "YYYY-MM-DD")
                author
            }
        }
    }
`
