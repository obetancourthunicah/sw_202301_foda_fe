import { PropsWithChildren } from "react";
import "./ErrorField.css";
const ErrorField = ({ children }:PropsWithChildren) => {
  return <section className="error">{children}</section>;
};

export default ErrorField;
