import React, { createContext, useState, useCallback, useContext } from "react";
import { node, object } from "prop-types";

const AppContext = createContext({});
const { Provider } = AppContext;

export const Consumer = AppContext.Consumer;

export const AppProvider = ({ children, initialState }) => {
  const [state, setActualState] = useState(initialState);
  const setState = useCallback((newState, preUpdate) => {
    setActualState((prevState) => {
      if (preUpdate && preUpdate.call) {
        preUpdate();
      }
      return { ...prevState, ...newState };
    });
  }, []);

  const appContextValue = {
    state: {
      ...initialState,
      ...state,
    },
    setState,
  };

  return <Provider value={appContextValue}>{children}</Provider>;
};

AppProvider.propTypes = {
  children: node.isRequired,
  initialState: object,
};

AppProvider.defaultProps = {
  initialState: {},
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;
