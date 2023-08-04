import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./shared/pages/HomePage";
// import Header from "./shared/components/Header";
import MainNavigation from "./shared/components/MainNavigation";

function App() {
  let routes;

  routes = (
    <React.Fragment>
      <Route path="/" element={<HomePage />} />
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
