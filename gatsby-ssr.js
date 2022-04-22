/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
    setHeadComponents([
        <meta
            key={"naver-site-verification"}
            name="naver-site-verification"
            content="1b00ffd7da7a3a2efaebac547386ea6a759da9ad"
        />,
    ])
    setPostBodyComponents([
        <script
            key={
                "//dapi.kakao.com/v2/maps/sdk.js?appkey=4fc661cc5efee39dc7d901aabff3c1b9&"
            }
            src={
                "//dapi.kakao.com/v2/maps/sdk.js?appkey=4fc661cc5efee39dc7d901aabff3c1b9&?autoload=false"
            }
            defer
        />,
    ])
}
