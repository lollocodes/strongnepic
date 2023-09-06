import { User } from "../types/User";
import { GymClass } from "../types/GymClass";
import { classes, users } from "./dataService";

// Helper function to find user by id
export function getUserById(id: number): User | undefined {
  const foundUser = users.find((user) => user.id === id) as User | undefined;
  return foundUser;
}

// Helper function to find class by id
export function getClassById(id: number): GymClass | undefined {
  const foundClass = classes.find((cls) => cls.id === id);
  return foundClass;
}
