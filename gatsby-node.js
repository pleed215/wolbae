const { createFilePath } = require("gatsby-source-filesystem")
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes, createFieldExtension } = actions

    createFieldExtension({
        name: `defaultArray`,
        extend() {
            return {
                resolve(source, args, context, info) {
                    if (source[info.fieldName] == null) {
                        return []
                    }
                    return source[info.fieldName]
                },
            }
        },
    })

    const typeDefs = `
        type Site implements Node {
            siteMetadata: SiteMetadata
        }
        type SiteMetadata {
            menuLinks: [MenuLinks]!
        }
        type MenuLinks {
            name: String!
            link: String!
            subMenu: [SubMenu]
        }
        type SubMenu {
            name: String
            link: String
        }
    `
    createTypes(typeDefs)
}
exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    fields {
                        slug
                    }
                }
            }
        }
    `)
    const {
        data: {
            allMdx: { nodes },
        },
    } = result

    const postsPerPage = 10
    const numPages = Math.ceil(nodes.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
        createPage({
            path: index === 0 ? `/notices` : `/notices/${index + 1}`,
            component: require.resolve("./src/templates/notices.tsx"),
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                numPages,
                currentPage: index + 1,
            },
        })
    })

    nodes.forEach(node => {
        createPage({
            path: `/notices/${node.fields.slug}`,
            component: require.resolve("./src/templates/notice.tsx"),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}

exports.onCreateNode = ({
    node,
    getNode,
    actions: { createNode, createNodeField },
}) => {
    if (node.internal.type === "Mdx") {
        const filePath = createFilePath({ node, getNode, basePath: "notices" })
        const slug = filePath
            .replace(/\//g, "")
            .replace(/\s/g, "-")
            .toLocaleLowerCase()
        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
    }
}
