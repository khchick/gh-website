import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerSection from "../components/Global/Banner"
import HomeInfo from "../components/Home/HomeInfo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BannerSection
      img={data.img.childImageSharp.fluid}
      title="We build ideas."
      children="Gianthouse was started by the spirit of turning imaginations into reality. With deep understanding in technology and business, we develop or even invest in interesting projects. DevOps is the culture we adopted to deliver quality digital experiences."
      styleClass="default-banner"
    />
    <HomeInfo />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "home-banner.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100
          duotone: { highlight: "#2aa1c1", shadow: "#071730", opacity: 50 }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
