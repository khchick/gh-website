import React from "react"
import BannerImage from "gatsby-background-image"

export default function BannerSection({ img, styleClass, title, children }) {
  return (
    <BannerImage className={styleClass} fluid={img}>
    <div>
    <h1 className="display-3 font-weight-bold">
        {title}
      </h1>
      <p>{children}</p>
    </div>
    </BannerImage>
  )
}

BannerSection.defaultProps = {
  title: "default title",
  styleClass: "default-banner",
}
