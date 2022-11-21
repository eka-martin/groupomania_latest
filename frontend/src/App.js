import React from "react";
//import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Create from "./components/Create";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";
import SeeOne from "./components/SeeOne";
import Modify from "./components/Modify";
import Signup from "./components/Signup";

function App() {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/my-posts"
          element={
            <PrivateRoute>
              <Posts />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/create-post"
          element={
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/see-one/:id"
          element={
            <PrivateRoute>
              <SeeOne />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/modify/:id"
          element={
            <PrivateRoute>
              <Modify />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
