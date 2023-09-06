import jsonData from "../mockData.json";
import { User } from "../types/User";
import { GymClass } from "../types/GymClass";

type JsonData = {
    users: (User | { id: number; email: string; password: string; role: "USER" | "ADMIN"; bookedClasses?: number[] })[];
    classes: GymClass[];
  };

const { users, classes } = jsonData as JsonData;

export { users, classes };
