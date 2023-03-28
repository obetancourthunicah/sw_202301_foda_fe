import Field, { IFieldProps } from "./Field";
import { getInputDateString } from "@helpers/DateFunctions";
import { InputHTMLAttributes } from "react";
export interface IDateFieldProps extends IFieldProps {
  value: string;
  name: string;
  labelText: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const DateField = ({ value, ...rest }: IDateFieldProps) => {
  return Field({
    ...rest,
    type: "date",
    value: getInputDateString(new Date(value)),
  });
};

export default DateField;
