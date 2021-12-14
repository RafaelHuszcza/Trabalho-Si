import { createContext, useContext, useState, useCallback } from "react";

const ToolsContext = createContext({});

export const ToolsProvider = ({ children }) => {
  const [toolToEdit, setThisToolToEdit] = useState(() => {
    const tool = localStorage.getItem("@tecon:toolToEdit");
    if (tool) return JSON.parse(tool) 
    return{ 
      id: null,
      name: "",
      code_id: null,
      life_level: null,
      in_use: null,
      return_room: null,
      coment: "",
      user_id: null,
      room_id: null,
      created_at: null
  }
  });

  const [tools, setAllTools] = useState(() => {
    const tools = localStorage.getItem("@tecon:tools");
    console.log(tools)
    if (tools) return JSON.parse(tools) 
    return []
  });

  const setToolToEdit = useCallback((tool)=>{
    setThisToolToEdit(tool)
    localStorage.setItem("@tecon:toolToEdit", JSON.stringify(tool))
  },[])

  const setTools = useCallback((tools)=>{
    setAllTools(tools)
    localStorage.setItem("@tecon:tools", JSON.stringify(tools))
  },[])

  return (
    <ToolsContext.Provider value={{ tools, toolToEdit, setTools, setToolToEdit }}>
      {children}
    </ToolsContext.Provider>
  );
};

export const useTools = () => {
  const context = useContext(ToolsContext);
  return context;
};
