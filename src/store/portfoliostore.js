import { useState, createContext } from "react";
const PortfolioContext = createContext();
export const PortfolioProvider = ({ children }) => {
  let [alert, setAlert] = useState(false);
  const changeAlert = (value) => {
    return setAlert(value);
  };

  return (
    <PortfolioContext.Provider
      value={{
        alert,
        changeAlert,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
