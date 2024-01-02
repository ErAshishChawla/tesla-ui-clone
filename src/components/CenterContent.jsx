import { twMerge } from "tailwind-merge";
import classes from "classnames";

function CenterContent({ children, className, ...rest }) {
  const classNames = twMerge(
    "flex",
    "flex-col",
    "justify-between",
    "items-center",
    "grow",
    "shrink",
    "h-full",
    "pb-[12vh]",
    "pt-[15vh]",
    classes(className)
  );

  const styles = {
    maxWidth: "calc(100% - 3rem)",
  };

  return (
    <div className={classNames} style={styles} {...rest}>
      {children}
    </div>
  );
}

export default CenterContent;
