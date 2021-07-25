import React, { ReactNode } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Nav from './nav';
import Seo from './seo';

interface Props {
  children: ReactNode;
  seo?: any;
}

const Layout = ({ children, seo }: Props) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
        <Nav />
        <main>{children}</main>
      </>
    )}
  />
);

export default Layout;
