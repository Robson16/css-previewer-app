import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import BorderRadius from "./pages/BorderRadius";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={BorderRadius} />
    </BrowserRouter>
  );
}

export default Routes;
