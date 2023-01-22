import ConfigurationPage from "../../pages/ConfigurationPage";
import TeamsPage from "../../pages/TeamsPage";
import Nav from "../Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/configurations_page" element={<ConfigurationPage />} />
        <Route path="/team_page" element={<TeamsPage />} />
      </Routes>
    </div>
  );
}

export default App;
