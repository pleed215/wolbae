import { graphql, Link, PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MdxConnection } from "../../graphql-types"
import Dot from "../images/icons/four-dot.svg"

type PageContext = {
    limit: number
    skip: number
    currentPage: number
    numPages: number
}

type AllMdxType = {
    allMdx: MdxConnection
}

const NoticeList: React.FC<PageProps<AllMdxType, PageContext>> = ({
    data: {
        allMdx: { nodes },
    },
    pageContext: { currentPage, numPages },
}) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const nextPage = (currentPage + 1).toString()
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    return (
        <Layout
            useHero
            menuInfo={"공지 및 협력 > 공지사항"}
            pageTitle={"공지사항"}
        >
            <Seo title={"공지사항"} description={"월배요양병원 공지사항"} />
            <div className={"w-full mt-10"}>
                <div className={"flex items-center"}>
                    <Dot className={"mr-4"} />
                    <h1 className={"text-2xl font-jua"}>
                        월배요양병원 공지사항
                    </h1>
                </div>
                <hr className={"my-3"} />
                <div
                    className={
                        "w-full grid grid-cols-12 text-center bg-lime-700 text-white font-bold py-2"
                    }
                >
                    <div className={"col-span-8"}>제목</div>
                    <div className={"col-span-2"}>작성자</div>
                    <div className={"col-span-2"}>날짜</div>
                </div>
                {nodes.map(node => (
                    <Link to={`/notices/${node.fields?.slug}`} key={node.id}>
                        <div
                            className={
                                "w-full grid grid-cols-12 text-center text-gray-700 font-bold py-2 border-b border-gray-300"
                            }
                            key={node.id}
                        >
                            <div
                                className={"col-span-8 text-left pl-2 my-auto"}
                            >
                                {node.frontmatter?.title}
                            </div>
                            <div
                                className={
                                    "col-span-2 sm:text-md text-xs my-auto"
                                }
                            >
                                {node.frontmatter?.author}
                            </div>
                            <div
                                className={
                                    "col-span-2 sm:text-md text-xs my-auto"
                                }
                            >
                                {node.frontmatter?.date}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}

export default NoticeList

export const query = graphql`
    query paginatedQuery($limit: Int!, $skip: Int!) {
        allMdx(
            limit: $limit
            skip: $skip
            sort: {
                order: [DESC, DESC]
                fields: [frontmatter___date, frontmatter___title]
            }
        ) {
            totalCount
            nodes {
                id
                frontmatter {
                    title
                    subtitle
                    author
                    date(formatString: "YYYY-MM-DD")
                }
                excerpt
                fields {
                    slug
                }
            }
        }
    }
`
