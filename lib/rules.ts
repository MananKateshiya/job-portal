import { z } from "zod";

export const RegisterFormSchema = z.object({
    name: z.string()
        .min(1, { message: "Please enter a username." })
        .max(20, { message: "Username must be less than 20 characters long." })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(1, { message: "Not be empty." })
        .min(5, { message: "Length must be at least 5 characters long." })
        .regex(/[a-zA-Z]/, { message: "Must contain at lease one letter." })
        .regex(/[^a-zA-Z0-9]/, { message: "Must contain at least one special character." })
        .trim(),
    confirmPassword: z.string().trim(),

}).superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
        return ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Password fields do not match.",
            path: ["confirmPassword"]
        })
    }
})

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(1, { message: "Not be empty." })
        .min(5, { message: "Length must be at least 5 characters long." })
        .regex(/[a-zA-Z]/, { message: "Must contain at lease one letter." })
        .regex(/[^a-zA-Z0-9]/, { message: "Must contain at least one special character." })
        .trim(),

})