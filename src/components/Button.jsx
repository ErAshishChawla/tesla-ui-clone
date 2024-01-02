import PropTypes from "prop-types";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  rounded,
  outline,
  dark,
  light,
  translucent,
  className,
  ...rest
}) {
  let classes = classnames(
    "px-3",
    "py-1.5",
    "border",
    "flex",
    "items-center",
    {
      "bg-zinc-700  text-white": dark,
      "bg-zinc-200  text-black": light,
      "bg-[rgba(255,255,255,0.3)] text-black border-none": translucent,
      "rounded-full": rounded,
      "bg-transparent": outline,
      "text-black border-slate-900 border-4": dark && outline,
      "text-white border-zinc-200 border-4": light && outline,
    },
    className
  );

  classes = twMerge(classes);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  translucent: PropTypes.bool,
  className: PropTypes.string,
  checkVariationValue: ({ dark, light, translucent }) => {
    const count = Number(!!dark) + Number(!!light) + Number(!!translucent);

    if (count > 1) {
      return new Error("Only of dark, light or translucent can be true!");
    }
  },
};

export default Button;
