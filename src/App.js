import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./shared/pages/HomePage";
import MainNavigation from "./shared/components/MainNavigation";
import LoginPage from "./shared/pages/LoginPage";
import SignUpPage from "./shared/pages/SignupPage";

function App() {
  let routes;

  routes = (
    <React.Fragment>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/error404"
        element={<h1 className="center">No such path</h1>}
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </React.Fragment>
  );

  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
