import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerSection from "../components/Global/Banner"
import ContactInfo from "../components/Contact/ContactInfo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BannerSection
      img={data.img.childImageSharp.fluid}
      title="Reach out now."
      children="And kickstart your idea."
      styleClass="subpage-banner"
    />
    <ContactInfo />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact-banner.jpg" }) {
      childImageSharp {
        fluid (
          quality: 100
          duotone: { highlight: "#ffd000", shadow: "#071730", opacity: 50 }
        ){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
