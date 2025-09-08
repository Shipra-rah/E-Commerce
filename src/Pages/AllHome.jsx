import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Componants/Header";
import Footer from "../Componants/Footer";
import Sidebar from "../Componants/Sidebar";
import Content from "../Componants/Content";
import SearchProvider from "../Contexts/SearchProvider";

function AllHome() {
  const { collection } = useParams();
  const menu = collection ;

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

export default AllHome;
