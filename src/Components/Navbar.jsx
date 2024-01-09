import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Titles = {
  Home: "Home",
  Orders: "Orders",
  Products: "Products",
  Delivery: "Delivery",
  Marketing: "Marketing",
  Analytics: "Analytics",
  Payouts: "Payouts",
  Discounts: "Discounts",
  Audience: "Audience",
  Appearance: "Appearance",
  Plugins: "Plugins",
};

export default function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState(Titles.Payouts);
  const primarySidebar = [
    {
      title: Titles.Home,
      activeIcon: "./home-light.svg",
      nonActiveIcon: "./home-dark.svg",
      onClick: () => {
        setActive(Titles.Home);
      },
    },
    {
      title: Titles.Orders,
      activeIcon: "./orders-light.svg",
      nonActiveIcon: "./orders-dark.svg",
      onClick: () => {
        setActive(Titles.Orders);
      },
    },
    {
      title: Titles.Products,
      activeIcon: "./products-light.svg",
      nonActiveIcon: "./products-dark.svg",
      onClick: () => {
        setActive(Titles.Products);
      },
    },
    {
      title: Titles.Delivery,
      activeIcon: "./delivery-light.svg",
      nonActiveIcon: "./delivery-dark.svg",
      onClick: () => {
        setActive(Titles.Delivery);
      },
    },
    {
      title: Titles.Marketing,
      activeIcon: "./marketing-light.svg",
      nonActiveIcon: "./marketing-dark.svg",
      onClick: () => {
        setActive(Titles.Marketing);
      },
    },
    {
      title: Titles.Analytics,
      activeIcon: "./analytics-light.svg",
      nonActiveIcon: "./analytics-dark.svg",
      onClick: () => {
        setActive(Titles.Analytics);
      },
    },
    {
      title: Titles.Payouts,
      activeIcon: "./payouts-light.svg",
      nonActiveIcon: "./payouts-dark.svg",
      onClick: () => {
        setActive(Titles.Payouts);
      },
    },
    {
      title: Titles.Discounts,
      activeIcon: "./discount-light.svg",
      nonActiveIcon: "./discount-dark.svg",
      onClick: () => {
        setActive(Titles.Discounts);
      },
    },
    {
      title: Titles.Audience,
      activeIcon: "./audience-light.svg",
      nonActiveIcon: "./audience-dark.svg",
      onClick: () => {
        setActive(Titles.Audience);
      },
    },
    {
      title: Titles.Appearance,
      activeIcon: "./appearance-light.svg",
      nonActiveIcon: "./appearance-dark.svg",
      onClick: () => {
        setActive(Titles.Appearance);
      },
    },
    {
      title: Titles.Plugins,
      activeIcon: "./plugin-light.svg",
      nonActiveIcon: "./plugin-dark.svg",
      onClick: () => {
        setActive(Titles.Plugins);
      },
    },
  ];

  return (
    <div className="py-4 px-2.5 bg-[#1E2640] flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        {/* head */}
        <div className="grid grid-cols-[20%,auto,10%] gap-3 items-center px-2">
          <div>
            <img src="/logo.png" className="rounded"></img>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-white font-medium text-base">Nishyan</p>
            <a
              target="_blank"
              href="https://github.com/vinod95990"
              className="text-white text-sm underline opacity-80 font-light"
            >
              Visit store
            </a>
          </div>
          <div>
            <img src="/chevron-down.svg"></img>
          </div>
        </div>

        {/* primarySidebar */}
        <div className="flex flex-col gap-2">
          {primarySidebar.map((data, key) => {
            return (
              <div
                className="flex gap-3 items-center cursor-pointer  px-4 py-2 rounded"
                onClick={data.onClick}
                key={key}
                style={{
                  background: active == data.title ? "#495064" : "",
                  opacity: active == data.title ? 1 : 0.8,
                }}
              >
                <img
                  src={
                    active == data.title ? data.nonActiveIcon : data.activeIcon
                  }
                  width={20}
                  height={20}
                  alt=""
                />

                <p
                  className="font-medium text-sm"
                  style={{
                    color: active == data.title ? "#fff" : "#9bc0e3",
                  }}
                >
                  {data.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* score */}
      <div className="px-3 p-1.5 bg-[#353C53] rounded flex gap-3 items-center">
        <div className="flex items-start p-1.5 bg-[#495064] rounded">
          <img src="./wallet-light.svg"></img>
        </div>
        <div className="flex flex-col gap-0.5">
          <p
            className="text-white"
            style={{
              fontSize: "13px",
              opacity: 0.8,
            }}
          >
            Available credits
          </p>
          <p className="font-medium text-base text-white">222.10</p>
        </div>
      </div>
    </div>
  );
}
