export const workers = [
  {
    id: 1,
    firstname: "Bogdan",
    lastname: "Larionov",
    position: "Boss",
    in_office: false,
    avatar: "./media/face_1.jpeg",
    tasks: [
      {
        id: 1,
        task: "Pick up document",
      },
      {
        id: 2,
        task: "Do homework",
      },
      {
        id: 3,
        task: "Go to workspace",
      },
    ],
  },
  {
    id: 2,
    firstname: "Olga",
    lastname: "Petrova",
    position: "Manager",
    in_office: true,
    avatar: "./media/face_2.jpeg",
    tasks: [],
  },
  {
    id: 3,
    firstname: "Oleg",
    lastname: "Sidorov",
    position: "IT-manager",
    in_office: false,
    // avatar: "./media/face_3.jpeg",
    // avatar: "",
    tasks: [],
  },
  {
    id: 4,
    firstname: "Irina",
    lastname: "Sokolova",
    position: "Assistant",
    in_office: true,
    // avatar: "./media/face_4.jpeg",
    tasks: [
      {
        id: 1,
        task: "Prepare for the meeting",
      },
    ],
  },
];
