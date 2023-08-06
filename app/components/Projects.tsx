'use client'

import { projectsData } from "@/lib/data"
import SectionHeading from "./SectionHeading"
import Project from "./Project"
import React, { useEffect } from "react"
import { useSectionInView } from "@/lib/hooks"

const Projects = () => {
    const { ref } = useSectionInView('Projects', 0.5)


  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
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