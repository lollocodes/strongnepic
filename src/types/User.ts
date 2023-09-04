export type UserRole = "USER" | "ADMIN";

export interface User {
  id: number;
  name: string;

 lastname: string;
  password: string;
  role: UserRole;
};
