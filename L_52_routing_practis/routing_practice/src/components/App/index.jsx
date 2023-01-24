import FruitsPage from "../../pages/FruitsPage";
import VegetablesPage from "../../pages/VegetablesPage";
import Nav from "../Nav";
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from "../../pages/NotFoundPage";
import HomePage from "../../pages/HomePage";
import Page_1 from "../../pages/Page_1";
import Page_2 from "../../pages/Page_2";

function App() {
  return (
    <div>
     <Nav />
     <Routes>
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/fruits_page" element={<FruitsPage />} />
        <Route path="/vegetables_page" element={<VegetablesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
     </Routes>
    </div>
  );
}

export default App;
