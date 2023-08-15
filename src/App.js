import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./shared/pages/HomePage";
import MainNavigation from "./shared/components/MainNavigation";
import LoginPage from "./shared/pages/LoginPage";
import SignUpPage from "./shared/pages/SignupPage";
import NewQuestionPage from "./questions/pages/NewQuestionPage";
import QuestionsPage from "./questions/pages/QuestionsPage";
import TagPage from "./tags/pages/TagPage";
import UsersPage from "./users/pages/UsersPage";
import QuestionItem from "./questions/components/QuestionItem";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<HomePage />} />
        <Route path="/tags" element={<TagPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/questions/new" element={<NewQuestionPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/questions/:questionId" element={<QuestionItem />} />
        <Route
          path="/error404"
          element={<h1 className="center">No such path</h1>}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tags" element={<TagPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/questions/new" element={<LoginPage />} />
        <Route path="/questions/:questionId" element={<QuestionItem />} />
        <Route
          path="/error404"
          element={<h1 className="center">No such path</h1>}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
