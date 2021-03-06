import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(query);
  const { defaultSeo, siteName, favicon } = strapiGlobal;

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo };

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: 'og:title',
          content: fullSeo.metaTitle,
        },
        {
          name: 'twitter:title',
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: 'description',
          content: fullSeo.metaDescription,
        },
        {
          property: 'og:description',
          content: fullSeo.metaDescription,
        },
        {
          name: 'twitter:description',
          content: fullSeo.metaDescription,
        }
      );
    }

    if (fullSeo.article) {
      tags.push({
        property: 'og:type',
        content: 'article',
      });
    }
    tags.push({ name: 'twitter:card', content: 'summary_large_image' });

    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={fullSeo.metaTitle}
      titleTemplate={`%s | ${siteName}`}
      link={[
        {
          rel: 'icon',
          href: favicon.publicURL,
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css',
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
        },
      ]}
      script={[
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js',
        },
        {
          src:
            'https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js',
        },
      ]}
      meta={metaTags}
    />
  );
};

export default SEO;

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query {
    strapiGlobal {
      siteName
      favicon {
        localFile {
          publicURL
        }
      }
      defaultSeo {
        metaTitle
        metaDescription
      }
    }
  }
`;
