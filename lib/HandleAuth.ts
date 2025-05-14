import { ApiError } from "./errors";
const API_REGISTER = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`
const API_LOGIN = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`

export const registerUser = async (registerData: { name: string, email: string, password: string }) => {

    const response = await fetch(API_REGISTER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new ApiError(data.error || 'Registration failed', response.status);
    }

    return data; // { message: 'User registered' }

}
export const loginUser = async (loginData: { email: string, password: string }) => {


    const response = await fetch(API_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
        credentials: 'include'
    });

    const data = await response.json();

    if (!response.ok) {
        throw new ApiError(data.error || 'Something went wrong');
    }
    return data;

}
