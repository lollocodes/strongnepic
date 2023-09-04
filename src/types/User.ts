export type UserRole = "USER" | "ADMIN";

export interface User {
  id: number;
  username: string;
  password: string;
  role: UserRole;
};
