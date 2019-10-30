module.exports = {
    siteMetadata: {
        title: `Swizec Teller`,
        name: `Swizec Teller`,
        siteUrl: `https://swizec.com/blog`,
        description: `This is where I write thing.`,
        hero: {
            heading: `Hi I'm Swizec 👋 I write about JavaScript, bootstrapping, and improving your tech career`,
            maxWidth: 752
        },
        social: [{
                name: `twitter`,
                url: `https://twitter.com/swizec`
            },
            {
                name: `github`,
                url: `https://github.com/swizec`
            },
            {
                name: `instagram`,
                url: `https://instagram.com/swizec`
            }
        ]
    },
    plugins: [{
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/blog/",
                rootPath: "/",
                mailchimp: false,
                authorsPage: true,
                sources: {
                    local: true,
                    contentful: false
                }
            }
        },
        "gatsby-plugin-twitter",
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [{
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 10000,
                            linkImagesToOriginal: false,
                            quality: 80,
                            withWebp: true
                        }
                    },
                    {
                        resolve: `gatsby-remark-copy-linked-files`
                    },
                    {
                        resolve: `gatsby-remark-numbered-footnotes`
                    },
                    {
                        resolve: `gatsby-remark-smartypants`
                    },
                    {
                        resolve: "@raae/gatsby-remark-oembed",
                        options: {
                            usePrefix: false,
                            providers: {
                                include: [
                                    "YouTube",
                                    "CodeSandbox",
                                    "Codepen",
                                    "Twitter",
                                    "Instagram",
                                    "Twitch"
                                ]
                            }
                        }
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "noreferrer" // eslint-disable-line unicorn/prevent-abbreviations
                        }
                    },
                    {
                        resolve: require.resolve(
                            "./plugins/gatsby-remark-giphy"
                        ),
                        options: {
                            giphyApiKey: process.env.GIPHY_API_KEY
                        }
                    },
                    {
                        resolve: 'gatsby-remark-slug',
                    }
                ] // eslint-disable-line global-require
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Swizec Teller`,
                short_name: `Swizec`,
                start_url: `/blog`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/favicon.png`
            }
        },
        "gatsby-plugin-styled-components",
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-1464315-1"
            }
        },
        {
            resolve: "gatsby-plugin-facebook-pixel",
            options: {
                pixelId: "714190382013726"
            }
        },
        'gatsby-plugin-meta-redirect'
    ]
};