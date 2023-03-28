import { PropsWithChildren } from "react";
import { Button } from "./Button";

export const PrimaryButton = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) => {
  const primaryClassName = [className, "primaryButton"].join(" ");
  return (
    <Button {...props} className={primaryClassName}>
      {children}
    </Button>
  );
};
