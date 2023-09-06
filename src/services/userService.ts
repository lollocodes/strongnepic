import { User } from "../types/User";
import { GymClass } from "../types/GymClass";

// Import the 'classes' and 'users' data from the 'dataService' module.
import { classes, users } from "./dataService";

// Helper function to find a user by their ID
export function getUserById(id: number): User | undefined {
  const foundUser = users.find((user) => user.id === id) as User | undefined;
  return foundUser;
}

// Helper function to find a class by its ID.
export function getClassById(id: number): GymClass | undefined {
  const foundClass = classes.find((cls) => cls.id === id);
  return foundClass;
}
