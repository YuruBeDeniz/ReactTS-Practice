//interfaces allow us to describe the shape of objects & only objects
//We need to create an interface to define the properties that come into the component.

import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    
    const handleEdit = (project: Project) => {
        //console.log(project)
        setProjectBeingEdited(project)
    }

    return (
    <div className="row">
       {projects.map((project) => (
        <div key={project.id} className="cols-sm">
           {project === projectBeingEdited ? 
            <ProjectForm /> :
            <ProjectCard 
              project={project}
              onEdit={handleEdit} />
           }
        </div>
       ))}
   </div>
 );
}
