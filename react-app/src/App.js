import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import AllVehiclesPage from "./components/Vehicles/AllVehiclesPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import YourVehiclesPage from "./components/Vehicles/YourVehiclesPage";
import LandingPage from "./components/LandingPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/vehicles/current" >
            <YourVehiclesPage />
          </Route>
          <Route path="/vehicles/all" >
            <AllVehiclesPage />
          </Route>
          <Route path="/" >
            <LandingPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
