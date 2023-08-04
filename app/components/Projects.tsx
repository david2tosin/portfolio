import React from "react"
import { projectsData } from "@/lib/data"
import SectionHeading from "./SectionHeading"
import Project from "./Project"

const Projects = () => {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}
export default Projects