import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Routes from "./routes";
import globalStyle from "@styles/globalStyle";
import { AppProvider } from "@contexts/AppContext";

const App = () => (
  <HelmetProvider>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <AppProvider>
      <div css={globalStyle}>
        <Routes />
      </div>
    </AppProvider>
  </HelmetProvider>
);

export default App;
