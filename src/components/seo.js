import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, featuredImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      {...(title
        ? {
            titleTemplate: `%s — ${site.siteMetadata.title}`,
            title,
          }
        : {
            title: `${site.siteMetadata.title} — A blog by Janez Cadez`,
          })}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:image`,
          content: `${
            featuredImage
              ? window.location.host + featuredImage.childImageSharp.fluid.src
              : ""
          }`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
