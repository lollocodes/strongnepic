import jsonData from "../mockData.json";
import { User } from "../types/User";
import { GymClass } from "../types/GymClass";

// Define the JsonData type to represent the structure of the imported JSON data.
type JsonData = {
  users: (User | { id: number; email: string; password: string; role: "USER" | "ADMIN"; bookedClasses?: number[] })[];  
  classes: GymClass[];
};

// Destructure the imported JSON data
const { users, classes } = jsonData as JsonData;

export { users, classes };
