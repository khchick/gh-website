import React from "react"
import Title from "../Global/Title"
import Img from "gatsby-image";

export default function ProcessInfo({img}) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <Title title="How do we do it?" />
            <div class="separator" />
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              elit purus, lacinia at pretium vitae, lacinia scelerisque magna.
              Vivamus lorem diam, eleifend ut erat nec, efficitur aliquet metus.
              Nam orci augue, sollicitudin quis hendrerit eget, rhoncus sodales
              enim.
            </p>
            <Img fluid={img}/>
          </div>
        </div>
      </div>
    </section>
  )
}

