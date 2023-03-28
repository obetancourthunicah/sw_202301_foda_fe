import { PropsWithChildren } from 'react';
import './ActionsField.css';
interface IActionFieldProps {
  align?: 'left' | 'right' | 'center';
}
const ActionField = ({align, children } : PropsWithChildren<IActionFieldProps>) => {
  const className = ['action', align].join(' ');
  return (
    <section className={className}>
      {children}
    </section>
  );
}

export default ActionField;
