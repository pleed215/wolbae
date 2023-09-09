require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: `월배요양병원`,
        description: `대구 달서구에 진천동에 위치한 친절하고 깨끗한 요양병원입니다. 달서구 월배로 119.`,
        author: `월배요양병원`,
        siteUrl: `https://wolbae.co.kr`,
        menuLinks: [
            {
                name: "병원소개",
                link: "/",
                subMenu: [
                    {
                        name: "인사말",
                        link: "/greeting",
                    },
                    {
                        name: "미션과 비전",
                        link: "/mission-vision",
                    },
                    {
                        name: "찾아 오시는 길",
                        link: "/way-to-come",
                    },
                ],
            },
            {
                name: "진료 안내",
                link: "/treat-info",
                subMenu: [
                    {
                        name: "입원 및 진료 안내",
                        link: "/adm-treat-info",
                    },
                    {
                        name: "상담 및 면회 안내",
                        link: "/counsel-visit-info",
                    },
                    {
                        name: "비급여 항목 공지",
                        link: "/non-insurance",
                    },
                    {
                        name: "환자의 권리와 의무",
                        link: "/patient-rights-duties",
                    },
                ],
            },
            {
                name: "병원 시설 안내",
                link: "/facilities",
                subMenu: [{ name: "시설 소개", link: "/facilities" }],
            },
            {
                name: "프로그램 소개",
                link: "/program-info",
                subMenu: [
                    {
                        name: "치료 프로그램",
                        link: "/treat-system",
                    },
                    {
                        name: "물리치료 프로그램",
                        link: "/physical-therapy",
                    },
                    {
                        name: "인지기능 프로그램",
                        link: "/social-welfare",
                    },
                    {
                        name: "한방진료 프로그램",
                        link: "/korean-medical",
                    },
                ],
            },
            {
                name: "공지 및 협력",
                link: "/inform-coop",
                subMenu: [
                    {
                        name: "공지사항",
                        link: "/notices",
                    },
                    {
                        name: "대외 협력",
                        link: "/cooperation",
                    },
                ],
            },
        ],
    },
    plugins: [
        `gatsby-plugin-netlify`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `notices`,
                path: `${__dirname}/src/pages/notices`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // Footnotes mode (default: true)
                footnotes: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {
                                es6: "js",
                            },
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords:
                                                /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            // Customize the prompt used in shell output
                            // Values below are default

                            // By default the HTML entities <>&'" are escaped.
                            // Add additional HTML escapes by providing a mapping
                            // of HTML entities and their escape value IE: { '}': '&#123;' }
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [".mdx", ".md"],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-fontawesome-css`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /icons/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://www.wolbae.co.kr`,
                policy: [
                    {
                        userAgent: "*",
                        allow: "/",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `
                    query {
                    allSitePage {
                        nodes {
                            path
                        }
                    }}
                `,
                resolveSiteUrl: () => process.env.URL || `https://wolbae.co.kr`,
                resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                    return allPages.map(page => ({ ...page }))
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    }
                },
            },
        },
    ],
}
