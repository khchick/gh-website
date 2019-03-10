import React from "react"
import { Link } from "gatsby"
import Title from "../Global/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            {/* <Title title="Who Are You" /> */}
            <div class="separator"></div>
            <p className="mb-5">
              Gianthouse was started by the spirit of turning imaginations into
              reality. With deep understanding in technology and business, we
              develop or even invest in interesting projects. DevOps is the
              culture we adopted to deliver quality digital experiences.
            </p>
            <Link to="/process">
              <button className="btn default-btn text-uppercase btn-round">See how we work</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
