import React, { Component } from "react"
import Title from "../Global/Title"
import Img from "gatsby-image"
import { TiUser } from "react-icons/ti"

const getTypes = items => {
  let tempItems = items.map(item => {
    return item.node.types
  })
  let flatItems = flatten(tempItems)
  let tempTypes = new Set(flatItems)
  let types = Array.from(tempTypes)
  return types
}

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      projectItems: props.items.edges,
      types: getTypes(props.items.edges),
      filtered: false,
    }
  }

  handleItems = filter => {
    let currentFilter = document.getElementById(filter)

    // DEFAULT STATUS - Unfiltered, class = "filter-off"
    if (!this.state.filtered && currentFilter.className !== "filter-on") {
      let tempItems = [...this.state.items]
      let items = tempItems.filter(({ node }) => node.types.includes(filter))
      this.setState(() => {
        return {
          projectItems: items,
          filtered: true,
        }
      })
      currentFilter.classList.toggle("filter-on")
      currentFilter.classList.toggle("filter-off")
    }

    // FILTERED
    if (this.state.filtered) {
      let tempItems = [...this.state.items]
      if (currentFilter.className === "filter-on") {
        // Cancel filter, disable all
        this.setState(() => {
          return {
            projectItems: tempItems,
            filtered: false,
          }
        })
        let options = document.getElementById("filterList").children
        for (let i = 0; i < options.length; i++) {
          options[i].classList.add("filter-off")
          options[i].classList.remove("filter-on")
        }
      } else {
        // Apply new filter, disable all others
        let items = tempItems.filter(({ node }) => node.types.includes(filter))
        this.setState(() => {
          return {
            projectItems: items,
            filtered: true,
          }
        })
        currentFilter.classList.add("filter-on")
        currentFilter.classList.remove("filter-off")

        let options = document.getElementById("filterList").children
        for (let i = 0; i < options.length; i++) {
          if (options[i] != currentFilter) {
            options[i].classList.add("filter-off")
            options[i].classList.remove("filter-on")
          }
        }
      }
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

  renderFilter = filters => {
    return filters.map((filter, index) => {
      return (
        <button
          id={filter}
          key={index}
          className="filter-off"
          onClick={() => this.handleItems(filter)}
        >
          {filter}
        </button>
      )
    })
  }

  renderType = types => {
    return types.map(type => <button className="project-type">{type}</button>)
  }

  renderTech = technologies => {
    return technologies.map(technology => (
      <span className="tech">#{technology}&nbsp;&nbsp;</span>
    ))
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Title title="Our Portfolio" />
          <div class="separator" />
          <div className="row mb-5">
            <div id="filterList" className="col-10 mx-auto text-center">
              {this.renderFilter(this.state.types)}
            </div>
          </div>
          <div className="row justify-content-center no-gutters">
            {this.state.projectItems ? (
              this.renderProjects(this.state.projectItems)
            ) : (
              <h1>Update is currently in progress. Please come back soon.</h1>
            )}
          </div>
        </div>
      </section>
    )
  }
}

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    )
  }, [])
}
