import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Componants/Header";
import Footer from "../Componants/Footer";
import Sidebar from "../Componants/Sidebar";
import Content from "../Componants/Content";
import SearchProvider from "../Contexts/SearchProvider";

function Home() {
  const [searchParams] = useSearchParams();
  const menu = searchParams.get("menu") || "Winter";

  return (
    <SearchProvider>
      <Header menu={menu} />
      <div  className=" flex  px-6 justify-center " >
        <Sidebar />
        <Content />
      </div>
    </SearchProvider>
  );
}

export default Home;
