import { twMerge } from "tailwind-merge";
import classes from "classnames";

function Description({ children, className }) {
  const classNames = twMerge(
    "flex",
    "justify-center",
    "items-center",
    "grow",
    "h-full",
    "max-h-[45rem]",
    classes(className)
  );
  return (
    <div className={classNames}>
      <p>{children}</p>
    </div>
  );
}

export default Description;
