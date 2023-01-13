export const workers = [
  {
    id: 1,
    firstname: "Ivan",
    lastname: "Ivanov",
    position: "CEO",
    in_office: true,
    avatar: "./media/face_1.jpeg",
    tasks: [
      {
        id: 1,
        task: "Pick up document",
        done: true,
      },
      {
        id: 2,
        task: "Do homework",
        done: true,
      },
      {
        id: 3,
        task: "Go to workplace",
        done: false,
      },
    ],
  },
  {
    id: 2,
    firstname: "Olga",
    lastname: "Petrova",
    position: "Manager",
    in_office: false,
    tasks: [],
  },
  {
    id: 3,
    firstname: "Marina",
    lastname: "Sidorova",
    position: "IT-manager",
    in_office: true,
    avatar: "./media/face_3.jpeg",
    tasks: [],
  },
  {
    id: 4,
    firstname: "Irina",
    lastname: "Sokolova",
    position: "Assistant",
    in_office: false,
    avatar: "./media/face_4.jpeg",
    tasks: [
      {
        id: 1,
        task: "Prepare for the meeting",
        done: true,
      },
    ],
  },
  {
    id: 5,
    firstname: "Elena",
    lastname: "Fox",
    position: "Manager",
    in_office: false,
    avatar: "./media/face_2.jpeg",
    tasks: [
      {
        id: 1,
        task: "Start to reading",
        done: false,
      },
    ],
  },
];
