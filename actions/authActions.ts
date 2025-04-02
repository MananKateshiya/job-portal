"use server";

import { loginUser, registerUser } from "@/lib/HandleAuth";
import { LoginFormSchema, RegisterFormSchema } from "@/lib/rules";
import { createSession } from "@/lib/session";
import { LoginFormState, RegisterFormState } from "@/lib/types";

export const registerAction = async (prevState: RegisterFormState | undefined, formData: FormData): Promise<RegisterFormState> => {

    const validateFields = RegisterFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    })

    if (!validateFields.success) {
        const fieldErrors = validateFields.error.flatten().fieldErrors;

        return {
            errors: {
                name: fieldErrors.name,
                email: fieldErrors.email,
                password: fieldErrors.password,
                confirmPassword: fieldErrors.confirmPassword
            },
            serverError: null,
            success: false,
            name: formData.get('name')?.toString() || "",
            email: formData.get('email')?.toString() || "",
        };
    }
    try {
        const registerData = await registerUser(validateFields.data);
        if (registerData.success) {
            return {
                errors: {},
                serverError: null,
                success: true,
            }
        }

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        return {
            errors: {},
            serverError: errorMessage,
            success: false,
            name: formData.get('name')?.toString() || "",
            email: formData.get('email')?.toString() || "",
        };
    }
    return {
        errors: {},
        serverError: null,
        success: false,
        name: formData.get("name")?.toString() || "",
        email: formData.get("email")?.toString() || "",
    };
};

export const loginAction = async (prevState: any, formData: FormData): Promise<LoginFormState> => {

    const validateFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validateFields.success) {
        const fieldErrors = validateFields.error.flatten().fieldErrors;

        return {
            errors: {
                email: fieldErrors.email,
                password: fieldErrors.password
            },
            serverError: null,
            success: false,
            email: formData.get('email')?.toString(),
        }
    }

    try {
        const registerData = await loginUser(validateFields.data);

        if (registerData.success) {
            return {
                errors: {},
                serverError: null,
                success: true,
            }
        }

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occured';

        return {
            errors: {},
            serverError: errorMessage,
            success: false,
            email: formData.get('email')?.toString(),
        }
    }
    return {
        errors: {},
        serverError: null,
        success: false,
        email: formData.get('email')?.toString(),
    }

}
