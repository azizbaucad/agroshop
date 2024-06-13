import Image from "next/image";
import SideNavbar from "./components/SideNavbar";
import Header from "./components/Header";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Welcome from "./components/Welcome";
import Category from "./components/category";
import Product from "./components/Product";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-auto">
      <Header className="fixed top-0 left-0 right-0 z-10" />
      <div className="flex flex-col">
        <div className="flex-grow">
          <Welcome />
          <Category />
        </div>
        <Product />
        <div className="">
        
          
        </div>
      </div>
    </div>
  );
}
