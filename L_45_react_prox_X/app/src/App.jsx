import { todo } from "./data";
import ToDoContainer from "./ToDoContainer";

function App() {
  // console.log(todo);
  return (
    <div>
      <ToDoContainer todo={todo} />
    </div>
  );
}

export default App;
