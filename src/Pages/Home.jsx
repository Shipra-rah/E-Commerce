import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Componants/Header";
import Footer from "../Componants/Footer";
import Sidebar from "../Componants/Sidebar";
import Content from "../Componants/Content";
import SearchProvider from "../Contexts/SearchProvider";

function Home() {
  return (
    <SearchProvider>
      <Header />
      <div
        className="
          flex
          px-6
          justify-center
        "
      >
        <Sidebar />
        <Content />
      </div>
    </SearchProvider>
  );
}

export default Home;
