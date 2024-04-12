import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "ammar",
    email: "ammar@gmail.com",
  },
});

export default UserContext;
