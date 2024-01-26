import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const setProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <ProjectContext.Provider value={{ selectedProject, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
