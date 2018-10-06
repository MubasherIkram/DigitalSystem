import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Hero from 'components/hero';
import Paragraph from 'components/paragraph';
import Tabber from 'containers/tabber';
import ImageWings from 'components/imageWings';
import Section from 'components/section';
import Button from 'components/button';
import ServiceCardList from 'containers/serviceCardList';
import { graphql } from 'gatsby';

const Index = ({ data, location }) => (
  <Layout location={location.pathname}>
    <Hero
      logo
      title={data.prismicHomePage.data.tagline.html}
      image={
        data.prismicHomePage.data.hero_image.localFile.childImageSharp.fluid
      }
      primaryAction={{
        to: '/contact',
        desc: 'Get Started',
      }}
      secondaryAction={{
        to: '/contact',
        desc: 'Watch Video',
      }}
    />
    <Section title={data.prismicHomePage.data.services_title.text}>
      <Paragraph html>
        {data.prismicHomePage.data.services_tagline.html}
      </Paragraph>
      <ServiceCardList
        services={data.allPrismicService.edges}
        spotlight={[
          data.prismicHomePage.data.service_spotlight_1.document[0].uid,
          data.prismicHomePage.data.service_spotlight_2.document[0].uid,
          data.prismicHomePage.data.service_spotlight_3.document[0].uid,
        ]}
      />
    </Section>
    <Section title="Who We Serve" bg="purple" bottom top>
      <Tabber
        keys={data.allPrismicIndustry.edges.map(industry => industry.node.uid)}
      >
        {({ setTab, getVisibility }) => {
          const buttons = data.allPrismicIndustry.edges.map(industry => (
            <Button
              key={industry.node.uid}
              onClick={() => setTab(industry.node.uid)}
            >
              {industry.node.data.industry_name.text}
            </Button>
          ));
          const content = data.allPrismicIndustry.edges.map(industry => (
            <ImageWings
              visible={getVisibility(industry.node.uid)}
              key={industry.node.uid}
              image={
                industry.node.data.main_image.localFile.childImageSharp.fluid
              }
            />
          ));
          return (
            <>
              {buttons}
              {content}
            </>
          );
        }}
      </Tabber>
    </Section>
    <Section title="Get In Touch">hello</Section>

    <div style={{ height: '50vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    prismicHomePage {
      data {
        tagline {
          html
        }
        services_tagline {
          html
        }
        services_title {
          text
        }
        hero_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
        service_spotlight_1 {
          document {
            uid
          }
        }
        service_spotlight_2 {
          document {
            uid
          }
        }
        service_spotlight_3 {
          document {
            uid
          }
        }
      }
    }
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
    allPrismicService {
      edges {
        node {
          uid
          data {
            service_name {
              text
            }
            short_description {
              text
            }
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicIndustry {
      edges {
        node {
          uid
          data {
            industry_name {
              text
            }
            short_description {
              text
            }
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
