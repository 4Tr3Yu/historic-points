import React from "react";
import { Route, Routes } from "react-router-dom";
import GameList from "../pages/GameList";
import Home from "../pages/Home";
import ScoreList from "../pages/ScoreList";
import Layout from "./components/Layout";
import Loader from "./components/ui/Loader";
import { useLoading } from "./lib/loader";

const App = () => {
  const { isLoading } = useLoading();
  return (
      <Layout>
         {isLoading && <Loader/>}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/games" element={<GameList/>} />
            <Route path="/scores" element={<ScoreList/>} />
          </Routes>
      </Layout>
  );
};

export default App;
