import { twMerge } from "tailwind-merge";
import classes from "classnames";
import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import Button from "./Button";
import TeslaLogo from "/tesla.svg";

const selectedOptions = [
  "Model S",
  "Model 3",
  "Model X",
  "Model Y",
  "Solar Roof",
  "Solar Panels",
];

const userOptions = ["Shop", "Account", "Menu"];

const allOptions = [
  ...selectedOptions,
  "Existing Inventory",
  "Used Inventory",
  "Trade-In",
  "Test Drive",
  "Powerwall",
  "Commercial Energy",
  "Utilities",
  "Charging",
  "Find Us",
  "Support",
];

function Navbar({ logo, isVisible }) {
  const getShowSideMenu = () => {
    return window.innerWidth >= 1128 ? false : true;
  };

  const [showMenuButton, setShowMenuButton] = useState(getShowSideMenu);
  const [showSideMenu, setshowSideMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenuButton(getShowSideMenu);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClose = () => {
    setshowSideMenu(false);
  };

  const handleClick = () => {
    setshowSideMenu(true);
  };

  const classNames = twMerge(
    classes("w-full flex flex-row justify-between fixed top-0 p-6")
  );

  const menuButton = (
    <div className="flex justify-center items-center">
      <Button
        className={classes("rounded-xl text-lg font-light px-4 py-2", {
          "text-white bg-gray-800": isVisible,
        })}
        translucent
        onClick={handleClick}
      >
        Menu
      </Button>
    </div>
  );

  const products = (
    <div className="flex items-center justify-between">
      {selectedOptions.map((option) => {
        return (
          <div
            key={crypto.randomUUID()}
            className={classes("flex mx-2 text-lg", {
              "text-gray-800": !isVisible,
              "text-white": isVisible,
            })}
          >
            {option}
          </div>
        );
      })}
    </div>
  );

  const userMenu = (
    <div className="flex items-center justify-between">
      {userOptions.map((option) => {
        return (
          <div
            className={classes("flex mx-2 text-lg", {
              "text-gray-800": !isVisible,
              "text-white": isVisible,
            })}
            key={crypto.randomUUID()}
          >
            {option}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={classNames}>
      <div className="flex justify-center items-center ps-2">
        <img
          src={logo}
          alt="logo"
          className={classes("w-[10rem] text-lg", {
            invert: isVisible,
          })}
        />
      </div>
      {showMenuButton && menuButton}
      {!showMenuButton && products}
      {!showMenuButton && userMenu}
      {showSideMenu && <SideMenu menuItems={allOptions} onClose={onClose} />}
    </div>
  );
}

export default Navbar;
