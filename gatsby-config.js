module.exports = {
    siteMetadata: {
        title: `월배요양병원`,
        description: `대구 달서구에 진천동에 위치한 친절하고 깨끗한 요양병원입니다. 달서구 월배로 119.`,
        author: `월배요양병원`,
        siteUrl: `http://wbwoori.co.kr`,
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
                        name: "비급여 항목 공지",
                        link: "/non-insurance",
                    },
                    {
                        name: "상담 및 면회 안내",
                        link: "/councel-visit-info",
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
                        name: "인지기능 프로그램",
                        link: "/cognitive-treat",
                    },
                    {
                        name: "한방진료 프로그램",
                        link: "/korean-medical",
                    },
                    {
                        name: "사회복지 프로그램",
                        link: "/social-welfare",
                    },
                ],
            },
            {
                name: "공지 및 협력",
                link: "/inform-coop",
                subMenu: [
                    {
                        name: "공지사항",
                        link: "/notification",
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
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
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
    ],
}
