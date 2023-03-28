import { InputHTMLAttributes } from 'react';
import './Field.css';
export interface IFieldSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name?: string;
  labelText?: string;
  value?: string;
  options?: { value: string, text: string }[];
  valueField?: string;
  textField?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const FieldSelect = ({
  name = "",
  labelText = "",
  value = "",
  options = [],
  valueField = "value",
  textField = "text",
  onChange = (e: React.ChangeEvent<HTMLSelectElement>) => { },
  ...rest
}:IFieldSelectProps) => {
  return (
    <fieldset className="input">
      <label htmlFor={name}>{labelText}</label>
      <select name={name} id={name} value={value} onChange={onChange} {...rest}>
        {options.map((option:{value:string, text:string}) => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    </fieldset>
  );
}

export default FieldSelect;
