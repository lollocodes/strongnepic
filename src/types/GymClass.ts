import { User } from "./User";

export interface GymClass {
    id: number;
    name: string;
    capacity: number;
    booked: number;
    date: string;
    time: string;
    duration: number;
    bookedUsers: User[];
  };
  