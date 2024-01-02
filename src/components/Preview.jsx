import { twMerge } from "tailwind-merge";
import classes from "classnames";
import { element } from "prop-types";

function Preview({ children, className, background, elementRef, ...rest }) {
  const classNames = twMerge(
    classes(
      "w-full h-full bg-no-repeat bg-center",
      "bg-cover",
      "snap-start snap-end",
      "flex justify-center items-center",
      className
    )
  );

  const styles = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className={classNames} style={styles} {...rest} ref={elementRef}>
      {children}
    </div>
  );
}

export default Preview;
