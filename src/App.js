import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoardView from "./components/dashboard/DashBoardView";

const App = () => {
  return (
    <Switch>
      <Route path="/dashboard">
        <DashBoardView />
      </Route>
      <Route path="/" exact={true}>
        <DashBoardView />
      </Route>
      <Route component={() => <h2>Page Not Found</h2>} />
    </Switch>
  );
};

export default App;
