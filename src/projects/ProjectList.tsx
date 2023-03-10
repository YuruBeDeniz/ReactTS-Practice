//interfaces allow us to describe the shape of objects & only objects
//We need to create an interface to define the properties that come into the component.

import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
    projects: Project[];
    onSave: (project: Project) => void;
}

export default function ProjectList({ projects, onSave }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    
    const handleEdit = (project: Project) => {
        //console.log(project)
        setProjectBeingEdited(project)
    }

    //In a parent component, implement a function and pass it as a prop to a child component:
    const cancelEditing = () => {
        setProjectBeingEdited({});
    }

    return (
    <div className="row">
       {projects.map((project) => (
        <div key={project.id} className="cols-sm">
           {project === projectBeingEdited ? 
            <ProjectForm
              project={project}
              onSave={onSave}
              onCancel={cancelEditing} /> :
            <ProjectCard 
              project={project}
              onEdit={handleEdit} />
           }
        </div>
       ))}
   </div>
 );
}
