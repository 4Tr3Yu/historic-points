import React from "react";
import { Route, Routes } from "react-router-dom";
import GameList from "../pages/GameList";
import Home from "../pages/Home";
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
          </Routes>
      </Layout>
  );
};

export default App;
