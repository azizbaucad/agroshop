import Image from "next/image";
import SideNavbar from "./components/SideNavbar";
import Header from "./components/Header";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import PerformanceChart from "./components/PerformanceChart";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1 md:flex h-screen relative">
        <Header />
        <PerformanceChart />
      </div>
    </div>
  );
}
