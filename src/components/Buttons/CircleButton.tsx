import { PropsWithChildren } from "react";
import { Button } from "./Button";

export const CircleButton = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) => {
  const circleClassName = [className, "circleButton"].join(" ");
  return (
    <Button {...props} className={circleClassName}>
      {children}
    </Button>
  );
};
