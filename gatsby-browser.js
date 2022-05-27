/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/globals.scss"
function insertAnalytics() {
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

    const script2 = document.createElement('script');
    script2.type = "text/javascript";
    script2.src = "//wcs.naver.net/wcslog.js";
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'text/javascript';
    script3.innerText = `if(!wcs_add) var wcs_add = {};wcs_add["wa"] = "146835504658e60";if(window.wcs) wcs_do();`
    document.body.appendChild(script3);
}

export function onInitialClientRender() {
    insertAnalytics()
}
