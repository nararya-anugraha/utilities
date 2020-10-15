import React, { createContext, useState, useCallback, useContext } from "react";
import { node, object } from "prop-types";

const AppContext = createContext({});
const { Provider } = AppContext;

const AppProvider = ({ children, initialState }) => {
  /* 
   The state variable will store all the data inside the app.
   I am using 'setActualState'  because I want a different behaviour for the state setter 
  */
  const [state, setActualState] = useState(initialState);

  /* 
   Just like class based setState, the setState() function only replaces the field described inside it.
   For example if you have state {a: 1, b: 2} calling setState({b: 3, c: 4)) 
   will result in the state being {a:1, b:3, c:4} */
  const setState = useCallback(
    (newState) =>
      setActualState((prevState) => ({ ...prevState, ...newState })),
    []
  );

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

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
