import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () =>
    process.env.NODE_ENV === "development" ? (
        <Layout>
            <Helmet>
                <script
                    src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=4fc661cc5efee39dc7d901aabff3c1b9&autoload=false`}
                    defer
                />
            </Helmet>
            <Seo title="Home" />
            <h1 className={"font-godo"}>Hi people 안녕</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>

            <p>
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">
                    Go to "Using TypeScript"
                </Link>{" "}
                <br />
                <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
                <Link to="/using-dsg">Go to "Using DSG"</Link>
            </p>
        </Layout>
    ) : (
        <div>공사중...</div>
    )

export default IndexPage
