import ConfigurationPage from "../../pages/ConfigurationPage";
import TeamsPage from "../../pages/TeamsPage";
import Nav from "../Nav";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Context } from "../../context";

function App() {
  const [teams, setTeams] = useState([]);
  const addTeam = (team_title) => {
    setTeams([...teams, { value: team_title, lable: team_title }]);
  };
  return (
    <Context.Provider value={{ teams, addTeam }}>
      <Nav />
      <Routes>
        <Route path="/configurations_page" element={<ConfigurationPage />} />
        <Route path="/team_page" element={<TeamsPage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
