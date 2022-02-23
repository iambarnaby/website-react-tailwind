import { useEffect, useState } from "react";
import { useRef } from "react";
import NodeTab from "./TabComponents/NodeTab";
import ReactTab from "./TabComponents/ReactTab";
import ShopifyTab from "./TabComponents/ShopifyTab";

const Portfolio = () => {
  const [tab, setTab] = useState("all");

  const handleTabButton = (value, colour) => {
    setTab(value);
  };
  const renderSwitch = (tab) => {
    console.log("switch run");
    switch (tab) {
      case "react":
        return <ReactTab />;
      case "shopify":
        return <ShopifyTab />;
      case "node":
        return <NodeTab />;
      default:
        return (
          <div>
            <ReactTab /> <ShopifyTab /> <NodeTab />
          </div>
        );
    }
  };
  return (
    <div
      id="portfolio"
      className=" bg-[#2a2a2a] w-[100vw] max-w-full h-[auto] min-h-screen pb-[50px]"
    >
      <div className="flex text-[#fafafa] font-poppins font-semibold text-size28 pt-[50px] pr-[50px] items-center justify-end">
        Portfolio
      </div>
      <div className="flex justify-center items-center h-[auto] ">
        <div className="flex flex-col w-[700px]">
          <div className="flex justify-center space-x-[50px] ">
            <button
              id="react"
              className="h-[50px] bg-transparent hover:bg-[#61DAFB] text-white-700 font-semibold text-white hover:text-[#2a2a2a] py-2 px-4 border-[2px] hover:border-transparent rounded focus:bg-[#61DAFB] focus:border-transparent focus:text-[#2a2a2a]"
              onClick={() => {
                handleTabButton("react", "#61DAFB");
              }}
            >
              React
            </button>
            <button
              id="shopify"
              className="h-[50px] bg-transparent hover:bg-[#95BF47] text-white-700 font-semibold text-white hover:text-white py-2 px-4 border-[2px] hover:border-transparent rounded focus:bg-[#95BF47] focus:border-transparent"
              onClick={() => {
                handleTabButton("shopify", "#95BF47");
              }}
            >
              Shopify
            </button>
            <button
              id="node"
              className="h-[50px] bg-transparent hover:bg-[#3C873A] text-white-700 font-semibold text-white hover:text-white py-2 px-4  border-[2px] hover:border-transparent rounded focus:bg-[#3C873A] focus:border-transparent"
              onClick={() => {
                handleTabButton("node", "#3C873A");
                document
                  .querySelector(".section.collapsible")
                  .classList.toggle("collapsed");
              }}
            >
              NodeJs
            </button>
          </div>
          {renderSwitch(tab)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
