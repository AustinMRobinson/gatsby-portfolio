const path = require('path')

// create page (destructured node function)
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    const freelanceTemplate = path.resolve('./src/templates/freelance.js')
    const anotherres = await graphql(`
    query {
        allContentfulFreelanceWork {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `)
    // function that runs to create each page in the edges
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
    // function that runs to create each page in the edges
    anotherres.data.allContentfulFreelanceWork.edges.forEach((edge) => {
        createPage({
            component: freelanceTemplate,
            path: `/freelance/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}