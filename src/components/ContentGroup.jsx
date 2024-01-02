import { twMerge } from "tailwind-merge";
import classes from "classnames";

function ContentGroup({ children, className }) {
  const classNames = twMerge(
    "flex flex-col w-full justify-center items-center",
    classes(className)
  );
  return <div className={classNames}>{children}</div>;
}

export default ContentGroup;
