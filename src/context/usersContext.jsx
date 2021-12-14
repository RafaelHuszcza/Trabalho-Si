import { createContext, useContext, useState, useCallback } from "react";

const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [userToEdit, setThisUserToEdit] = useState(() => {
    const user = localStorage.getItem("@meta:userToEdit");
    if (user) return JSON.parse(user) 
    return { name: "", password: "", matricula: "",
      user_type: "", code_id: "", email: "", 
    }
  });

  const [users, setAllUsers] = useState(() => {
    const user = localStorage.getItem("@meta:users");
    if (user) return JSON.parse(user) 
    return []
  });

  const setUserToEdit = useCallback((user)=>{
    setThisUserToEdit(user)
    localStorage.setItem("@meta:userToEdit", JSON.stringify(user))
  },[])

  const setUsers = useCallback((users)=>{
    setAllUsers(users)
    localStorage.setItem("@meta:users", JSON.stringify(users))
  },[])

  return (
    <UsersContext.Provider value={{ userToEdit, setUserToEdit, users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  return context;
};
