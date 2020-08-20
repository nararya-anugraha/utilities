import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import ColorFinder from "./ColorFinder";
import Home from "./Home";
import globalStyle from "@styles/globalStyle";

const routes = [{ ...ColorFinder }, { ...Home }];

const App = () => (
  <Router basename="/utilities">
    <Suspense fallback={null}>
      <div css={globalStyle}>
        <Switch>
          {routes.map(({ exact, path, Component }, index) => (
            <Route {...{ exact }} path={`/${path}`} key={index}>
              <Component />
            </Route>
          ))}
        </Switch>
      </div>
    </Suspense>
  </Router>
);

export default App;
