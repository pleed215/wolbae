/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/globals.scss"
function insertGoogleAnalytics() {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    script.src = "https://www.googletagmanager.com/gtag/js?id=UA-226672684-1"
    document.getElementsByTagName("head")[0].appendChild(script)

    function gtag() {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(arguments)
    }
    gtag("js", new Date())
    gtag("config", "UA-226672684-1")
}

export function onInitialClientRender() {
    insertGoogleAnalytics()
}
