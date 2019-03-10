import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerSection from "../components/Global/Banner"
import Info from "../components/Home/info"

const ProcessPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BannerSection
      img={data.img.childImageSharp.fluid}
      title="We are agile."
      children="DevOps is the culture we adopted to deliver quality digital experiences."
      styleClass="subpage-banner"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "process-banner.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ProcessPage
