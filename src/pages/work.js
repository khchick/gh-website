import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerSection from "../components/Global/Banner"
import WorkInfo from "../components/Work/WorkInfo"
import Portfolio from "../components/Work/Portfolio"

const WorkPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BannerSection
      img={data.img.childImageSharp.fluid}
      title="We know our stuff."
      children="We pick the best technology to actualize our clients' ideas."
      styleClass="subpage-banner"
    />
    <WorkInfo />
    <Portfolio items={data.project} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "work-banner.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100
          duotone: { highlight: "#fd06ab", shadow: "#071730", opacity: 50 }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    project:allContentfulProject {
      edges {
        node {
          id
          name
          client
          types
          technologies
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default WorkPage
