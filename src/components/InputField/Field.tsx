import { InputHTMLAttributes } from 'react';
import './Field.css';
export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText:string;
  name:string;
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
const Field  = ({
  name = "",
  labelText = "",
  type = "text",
  value = "",
  onChange = (e:React.ChangeEvent<HTMLInputElement>) => { },
  ...rest
}: IFieldProps) => {
  return (
    <fieldset className="input">
      <label htmlFor={name}>{labelText}</label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} {...rest} />
    </fieldset>
  );
}

export default Field;
