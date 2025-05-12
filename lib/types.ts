export interface RegisterFormState {
  errors: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  serverError: string | null;
  success: boolean;
  name?: string;
  email?: string;
}

export interface LoginFormState {
  errors: {
    email?: string[];
    password?: string[];
  },
  token: string;
  serverError: string | null;
  success: boolean;
  email?: string;
}

export enum UserType {
  Guest = "guest",
  Admin = "admin",
  Candidate = "candidate",
  Recruiter = "recruiter"
}