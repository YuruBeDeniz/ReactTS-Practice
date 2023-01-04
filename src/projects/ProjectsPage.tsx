import { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
      //console.log('Saving project', project);
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  }

  return (
    <div>
    <h1>Projects</h1>
    <ProjectList 
        onSave={saveProject}
        projects={projects} />
    </div>
  )
}






/* 1. saveProject & 2. onSave={saveProject}
1. Add a saveProject event handler that takes a project to ProjectPage and console.log's the project out.
2. Wire up the onSave event of the <ProjectList /> component rendered in the ProjectPage to the saveProject event handler. */