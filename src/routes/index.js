import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import ContextHooks from "./ContextHooks";

import ColorFinder from "./ColorFinder";
import Home from "./Home";
import Uploader from "./Uploader";
import StringTransform from "./StringTransform";

import CanvasDemo from "./CanvasDemo";
import CanvasAnimation from "./CanvasAnimation";

import globalStyle from "@styles/globalStyle";

const routes = [
  { ...CanvasAnimation },
  { ...CanvasDemo },
  { ...ColorFinder },
  { ...ContextHooks },
  { ...Home },
  { ...Uploader },
  { ...StringTransform },
];

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
