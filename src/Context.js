import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [loginSession, setLoginSession] = useState({ loginStautus: false });
  const [jobList, setJobList] = useState();

  let base = "https://job-portal-backend-mern.vercel.app";
  let getJoblist = () => {
    Axios.get(`${base}/getJobList`).then((result) => {
      setJobList(result);
    });
  };

  useEffect(() => {
    getJoblist();
  }, []);

  return (
    <ContextProvider.Provider
      value={{ loginSession, setLoginSession, jobList, setJobList }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
