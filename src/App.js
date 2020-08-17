import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import globalStyle from "@styles/globalStyle";
import ColorFinder from "@routes/ColorFinder";
import { AppProvider } from "@contexts/AppContext";

const routes = [{ ...ColorFinder }];

const App = () => (
  <HelmetProvider>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <AppProvider>
      <Router>
        <Suspense fallback={null}>
          <div css={globalStyle}>
            <Switch>
              {routes.map(({ path, Component }, index) => (
                <Route path={`/${path}`} key={index}>
                  <Component />
                </Route>
              ))}
            </Switch>
          </div>
        </Suspense>
      </Router>
    </AppProvider>
  </HelmetProvider>
);

export default App;
