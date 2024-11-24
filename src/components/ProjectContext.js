import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const setProject = (project) => {
    setSelectedProject(project);
  };
  const setProgram = (program) => {
    setSelectedProgram(program);
  };

  return (
    <ProjectContext.Provider
      value={{ selectedProject, setProject, selectedProgram, setProgram }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
