import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

// when to use useReducer() - use this when a state update relies
// on another state update, this is because React schedules state
// updates in a way that the target state could run after the state
// that is checking it, therefore incorrect information will be
// retrieved. see login.js
// example of useReducer()
// const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
// state is the latest state snapshot
// dispatchFn is a function that can be used to dispatch a new action, trigger an update
// reducerFn gets the latest state snapshot and the action that was despatched => returns the newState
// initialState sets the default initial state you want to run
// initFn a function to set the initial state programatically

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
