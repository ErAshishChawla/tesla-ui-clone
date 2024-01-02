import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";
import classes from "classnames";

function SideMenu({ menuItems, onClose }) {
  const renderedItems = menuItems.map((item) => {
    return (
      <div
        key={crypto.randomUUID()}
        className="px-[3rem] py-[1.25rem] text-lg cursor-pointer hover:bg-gray-200"
      >
        {item}
      </div>
    );
  });

  const sideMenuContent = (
    <div className="flex flex-col bg-white inset-0 absolute overflow-scroll no-scrollbar">
      <div className="flex justify-end items-center px-2 py-8">
        <button
          onClick={onClose}
          className="text-[2rem] hover:bg-gray-200 cursor-pointer
          p-2"
        >
          <AiOutlineClose />
        </button>
      </div>
      {renderedItems}
    </div>
  );

  return createPortal(
    sideMenuContent,
    document.querySelector(".modal-container")
  );
}

export default SideMenu;
