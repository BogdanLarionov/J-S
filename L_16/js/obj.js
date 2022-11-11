// реализовать новый массив, в котором будет поля
// id, name, order_total

const customers = [
  {
    id: 1,
    name: "Максим",
    orders: [10000, 23000, 19000],
  },
  {
    id: 2,
    name: "Олег",
    orders: [12000, 43000, 9000],
  },
  {
    id: 3,
    name: "Ольга",
    orders: [22000, 44000, 6000],
  },
  {
    id: 4,
    name: "Семен",
    orders: [32000, 65000, 11000],
  },
];

const new_arr_customers = customers.map((cust) => {
  return {
    id: customers.id,
    name: cust.name,
    order_total: cust.orders.reduce((prev, value) => prev + value),
  };
});
console.log(new_arr_customers);

/* [
  { id: undefined, name: 'Максим', order_total: 52000 },
  { id: undefined, name: 'Олег', order_total: 64000 },
  { id: undefined, name: 'Ольга', order_total: 72000 },
  { id: undefined, name: 'Семен', order_total: 108000 }
] */
