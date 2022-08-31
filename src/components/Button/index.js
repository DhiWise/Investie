import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder6: "rounded-radius6" };
const variants = {
  FillBlueA200: "bg-blue_A200 text-white_A700",
  OutlineBluegray901:
    "bg-bluegray_902 border border-bluegray_901 border-solid text-bluegray_200",
};
const sizes = {
  sm: "2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  md: "lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf(["FillBlueA200", "OutlineBluegray901"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder6",
  variant: "FillBlueA200",
  size: "sm",
};

export { Button };
