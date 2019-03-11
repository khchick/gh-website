import React, { Component } from "react"
import Title from "../Global/Title"
import Img from "gatsby-image"
import { TiUser } from "react-icons/ti"

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      projectItems: props.items.edges,
    }
  }

  renderProjects = projects => {
    return projects.map(data => {
      const project = data.node
      return (
        <div key={project.id} className="col-12 col-sm-10 col-lg-6">
          <div className="project-container">
            <Img fluid={project.images[0].fluid} className="project-image" />
            <div className="overlay">
              <div className="project-info">
                <h5>{project.name}</h5>
                <div class="client-row">
                  <TiUser className="client" /> {project.client}
                </div>
                {project.technologies && this.renderTech(project.technologies)}
              </div>
            </div>
          </div>
          <div className="type-list">{this.renderType(project.types)}</div>
        </div>
      )
    })
  }

  renderType = types => {
    return types.map(type => <button className="project-type">{type}</button>)
  }

  renderTech = technologies => {
    return technologies.map(technology => <span className="tech">#{technology}&nbsp;&nbsp;</span>)
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Title title="Our Portfolio" />
          <div class="separator" />
          <div className="row justify-content-center no-gutters">
            {this.state.items ? (
              this.renderProjects(this.state.items)
            ) : (
              <h1>Update is currently in progress. Please come back soon.</h1>
            )}
          </div>
        </div>
      </section>
    )
  }
}
