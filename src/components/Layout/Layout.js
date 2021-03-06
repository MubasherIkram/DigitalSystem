import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import { Navbar } from 'containers';
import { Footer } from 'components';
import GlobalStyle from 'global.css.js';

const Layout = ({
  data,
  children,
  stuckNav,
  location,
  pageTitle,
  parents,
  services,
  pageDescription,
  imageUrl,
}) => (
  <div
    style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '100%',
      gridTemplateRows: 'minmax(80vh, min-content) min-content',
    }}
  >
    <GlobalStyle />
    <Head
      pageDescription={pageDescription}
      pageTitle={pageTitle}
      imageUrl={imageUrl}
      parents={parents}
      services={services}
    />
    <Navbar
      title={data.site.siteMetadata.siteTitle}
      stuck={stuckNav}
      location={location}
    />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  stuckNav: PropTypes.bool,
  location: PropTypes.string,
  pageTitle: PropTypes.string,
  parents: PropTypes.array,
  services: PropTypes.array,
  imageUrl: PropTypes.string,
  pageDescription: PropTypes.string,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
  stuckNav: PropTypes.bool,
  location: PropTypes.string,
  pageTitle: PropTypes.string,
  parents: PropTypes.array,
};

export { LayoutWithQuery as Layout };
