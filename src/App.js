import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MenuOne from "./view/MenuOne";
import MenuTwo from "./view/MenuTwo";
import MenuThree from "./view/MenuThree";
import MenuFour from "./view/MenuFour";
import MenuFive from "./view/MenuFive";
import Home from "./view/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menuone" element={<MenuOne/>} />
          <Route path="/menutwo" element={<MenuTwo/>} />
          <Route path="/menuthree" element={<MenuThree/>} />
          <Route path="/menufour" element={<MenuFour/>} />
          <Route path="/menufive" element={<MenuFive/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
