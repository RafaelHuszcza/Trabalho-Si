import { createContext, useContext, useState, useCallback } from "react";
import ToastContainer from "../components/Toasts";

import { uuid } from 'uuidv4';

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  // const [toastsToAdd, setToastsToAdd] = useState([])

  const addToast = useCallback((newToast) =>{
    newToast = { ...newToast, id:uuid() }

    setToasts(current => [...current, newToast])
  },[])

  const removeToast = useCallback((toastId) =>{
    setToasts(currentToasts => currentToasts.filter((toast)=> toast.id !== toastId))
  },[])
  
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts}/>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  return context;
};
