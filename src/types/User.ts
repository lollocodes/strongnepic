
export interface User {
  id: number;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
  bookedClasses: number[];
};
