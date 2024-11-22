import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import sascoAlliedLogo from "images/sascoAlliedLogo.jpeg"

type SEOProps = {
  title?: string;
  lang?: string;
  meta: Array<{ name: string; content: string }>
  keywords: string[]
}

const SEO = (props: SEOProps) => {

  const detailsQuery = graphql`
    query SEOQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
    `
  const data = useStaticQuery(detailsQuery)
  const { meta, keywords } = props

  const title = props.title || data.site.siteMetadata.title

  const metaTitle = title || data.site.siteMetadata.title;
  const metaDescription = "Oris Medical Laboratory provides quality, affordable, and accessible diagnostic services across Nigeria.";

  return (
    <>
      <Helmet
        title={metaTitle}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            name: `keywords`,
            content: keywords.join(`, `),
          },
          ...meta,
        ]}

      >
        {/* data.site.siteMetadata.title */}
        <title>{`${title}`}</title>
        <link rel="icon" href={sascoAlliedLogo} type="image/png" sizes="36x36" />
      </Helmet>

    </>
  )
}

export default SEO