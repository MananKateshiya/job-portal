"use server";

import { loginUser, registerUser } from "@/lib/HandleAuth";
import { LoginFormSchema, RegisterFormSchema } from "@/lib/rules";

export const registerAction = async (prevState: any, formData: FormData) => {

    const validateFields = RegisterFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    })

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            name: formData.get('name')?.toString(),
            email: formData.get('email')?.toString(),
        };
    }
    registerUser(validateFields.data); //actual registeration process happens here

}

export const loginAction = async (prevState: any, formData: FormData) => {
    const validateFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            email: formData.get('email')?.toString(),
        }
    }

    loginUser(validateFields.data); //actual user login fetch request
}
