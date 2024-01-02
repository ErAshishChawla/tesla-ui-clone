import { twMerge } from "tailwind-merge";
import classes from "classnames";

function Title({ children, className, ...rest }) {
  const classNames = twMerge(
    "flex justify-center items-center",
    "text-black text-6xl",
    classes(className)
  );

  return (
    <div className={classNames} {...rest}>
      <h1>{children}</h1>
    </div>
  );
}

export default Title;
