import { FC } from "react";

import './Menu.css';

type MenuProps = {
  items: string[];
  itemClickHandler: (target: string) => void;
  selectedItem: string;
};

export const Menu: FC<MenuProps> = ({
  items = [],
  itemClickHandler = (target: string) => {
    console.warn("Menu", "Default Void Handler");
  },
  selectedItem = "noSelected",
}) => {
  return (
    <nav>
      <ul>
        {items.map((o, i) => {
          return (
            <li key={o} className={o===selectedItem?'active':''}>
              <a
                onClick={()=>{itemClickHandler(o);}}
              >
                {o.toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
