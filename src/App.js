import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MenuOne from "./view/MenuOne";
import MenuTwo from "./view/MenuTwo";
import MenuThree from "./view/MenuThree";
import MenuFour from "./view/MenuFour";
import MenuFive from "./view/MenuFive";
import Home from "./view/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menuone" element={<MenuOne/>} />
          <Route path="/Menutwo" element={<MenuTwo/>} />
          <Route path="/Menuthree" element={<MenuThree/>} />
          <Route path="/Menufour" element={<MenuFour/>} />
          <Route path="/Menufive" element={<MenuFive/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
