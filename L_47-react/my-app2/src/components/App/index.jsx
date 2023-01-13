import Worker from "../Worker";
import { workers } from "../../data/worker";

function App() {
  return (
    <div>
      {workers
        // .filter((elem) => elem.in_office)
        .map((elem) => (
          <Worker {...elem} key={elem.id} />
        ))}
    </div>
  );
}

export default App;
