import User from "./User";
import { users } from "../data/users";
import Product from "./Product";
import { products } from "../data/products";

export default function App() {
  // let users = [
  //   {
  //     id: 1,
  //     firstname: "Oleg",
  //     lastname: "Petrov",
  //     age: 50,
  //   },
  //   {
  //     id: 2,
  //     firstname: "Irina",
  //     lastname: "Ivanova",
  //     age: 10,
  //   },
  //   {
  //     id: 3,
  //     firstname: "Bogdan",
  //     lastname: "Larionov",
  //     age: 32,
  //   },
  //   {
  //     id: 4,
  //     firstname: "Nelli",
  //     lastname: "Efremyan",
  //     age: 27,
  //   },
  // ];
  return (
    <div>
      {/* <User First_name="Bogdan" Last_name="Larionov" Age={32} />
      <User First_name="Bogdan" Last_name="Larionov" Age={32} />
      <User First_name="Bogdan" Last_name="Larionov" Age={32} /> */}

      {/* {users.map((elem) => (
        <User
          firstname={elem.firstname}
          lastname={elem.lastname}
          age={elem.age}
          id={elem.id}
          city={elem.city}
        />
      ))} */}

      <h2>Users:</h2>

      {users.map((elem) => (
        <User {...elem} key={elem.id} />
      ))}

      <h2>Products:</h2>
      {products.map((elem) => (
        <Product {...elem} key={elem.id} />
      ))}
    </div>
  );
}

// export default App;
