import React from "react";
import { Route, Routes } from "react-router-dom";
import GameList from "../pages/GameList";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/games" element={<GameList />} />
      </Routes>
    </Layout>
  );
};

export default App;
