import { workers } from "../../data/worker";
import Cards from "../Cards";

function App() {
  return (
    <div>
      <Cards workers={workers} />
    </div>
  );
}

export default App;
