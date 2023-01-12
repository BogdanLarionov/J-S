import User from "../User";
import { users } from "../../data/users";
import s from "../App/index.module.css";

export default function App() {
  // const users = [
  //   {
  //     id: 1,
  //     firstname: "Oleg",
  //     lastname: "Petrov",
  //     adderess: "Moscow, Russia",
  //     salary: 280,
  //   },
  //   {
  //     id: 2,
  //     firstname: "Anna",
  //     lastname: "Ivanova",
  //     adderess: "Berlin, Germany",
  //     salary: 500,
  //   },
  // ];

  // return; - то что видет пользователь
  return (
    <div className={s.app}>
      {users.map((elem) => (
        <User {...elem} key={elem.id} />
        // <User key={elem.id}  {...elem} />
      ))}
    </div>
  );
}

// export default App;
