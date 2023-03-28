import "./App.css";

import { useState } from 'react';
import { Menu } from "./components/Menu";

import { Home } from './pages/Home/Home';
import { Version } from './pages/Version';
import { About } from './pages/About';

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  return (
    <div className="App">
      <Menu
        items={["Home", "Version", "About", "Login", "Signin"]}
        itemClickHandler={(newSelectedMenu: string): void => {
          setSelectedMenu(newSelectedMenu);
        }}
        selectedItem={selectedMenu}
      />
      {selectedMenu === "Home" && <Home />}
      {selectedMenu === "Version" && <Version />}
      {selectedMenu === "About" && <About />}
    </div>
  );
}

export default App;
