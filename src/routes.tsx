import React from "react";
import { HashRouter, Route } from "react-router-dom";

import BorderRadius from "./pages/BorderRadius";

function Routes() {
  return (
    <HashRouter>
      <Route path="/" exact component={BorderRadius} />
    </HashRouter>
  );
}

export default Routes;
