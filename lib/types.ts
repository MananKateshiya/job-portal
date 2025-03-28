export interface RegisterFormState {
    errors: {
      name?: string[];
      email?: string[];
      password?: string[];
      confirmPassword?: string[];
    };
    serverError: string | null;
    success: boolean;
    name: string;
    email: string;
  }