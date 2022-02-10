const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
    theme: {
        fontFamily: {
            jua: ["jua"],
            gothic: ["gothic"],
        },
        extend: {
            screens: {
                xs: "480px",
            },
            fontFamily: {
                sans: ["gothic", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
    ],
}
