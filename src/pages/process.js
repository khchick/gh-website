import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerSection from "../components/Global/Banner"
import ProcessInfo from "../components/Process/ProcessInfo"

const ProcessPage = ({ data }) => (
  <Layout>
    <SEO title="Process" keywords={[`gatsby`, `application`, `react`]} />
    <BannerSection
      img={data.img.childImageSharp.fluid}
      title="We are agile."
      children="DevOps is the culture we adopted to deliver quality digital experiences."
      styleClass="subpage-banner"
    />
    <ProcessInfo img={data.devopsImg.childImageSharp.fluid}/>
    {console.log(data.img.childImageSharp.fluid)}
    {console.log(data.devopsImg.childImageSharp.fluid)}
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "process-banner.jpg" }) {
      childImageSharp {
        fluid (
          quality: 100
          duotone: { highlight: "#ffd000", shadow: "#071730", opacity: 50 }
        ){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    devopsImg: file(relativePath: { eq: "devops.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default ProcessPage
