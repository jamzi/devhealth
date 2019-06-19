import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialShare from "../components/social/socialShare"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const {
      title,
      githubUsername,
      githubRepo,
      twitterUsername,
    } = this.props.data.site.siteMetadata
    const { previous, next, slug } = this.props.pageContext

    const editUrl = `https://github.com/${githubUsername}/${githubRepo}/edit/master/content/blog/${slug.slice(
      1,
      slug.length - 1
    )}/index.md`

    return (
      <Layout location={this.props.location} title={title}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          featuredImage={post.frontmatter.featuredImage}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <SocialShare
          post={post}
          slug={this.props.pageContext.slug}
          twitterUsername={twitterUsername}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer>
          <p>
            <a href={editUrl} target="_blank" rel="noopener noreferrer">
              Edit on GitHub
            </a>
          </p>
        </footer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        githubUsername
        githubRepo
        twitterUsername
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
