import { Routes, Route } from "react-router-dom";
import {Layout} from "./Layout";
import Home from "../pages/Home";
import {Calculator} from "../pages/Calculator";
import {Nominaly} from "../pages/Nominaly";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="nominaly" element={<Nominaly />} />
      </Route>
    </Routes>
  );
}
