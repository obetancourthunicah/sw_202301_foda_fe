import { PropsWithChildren } from "react";
export const Button = ({
  children,
  ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) => {
  return <button {...props}>{children}</button>;
};
