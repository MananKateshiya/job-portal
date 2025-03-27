
const API_REGISTER = 'http://localhost:3000/api/auth/register'
const API_LOGIN = 'http://localhost:3000/api/auth/login'

class ApiError extends Error {
    constructor(message: string, public statusCode?: number) {
        super(message);
        this.name = 'ApiError';
    }
}
export const registerUser = async (registerData: { name: string, email: string, password: string }) => {
    try {
        const response = await fetch(API_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new ApiError(data.error || 'Something went wrong');
        }

        return data; // { message: 'User registered' }
    } catch (error) {
        if (error instanceof ApiError) {
            console.error(`Registeration error: ${error.message}`)
        } else {
            const genericError = new ApiError('Unexpected error during registeration');
            console.error('Unexpected error during registration: ', error);
            throw genericError;

        }
    }

}
export const loginUser = async (loginData: { email: string, password: string }) => {
    try {
        const response = await fetch(API_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new ApiError(data.error || 'Something went wrong');
        }
        console.log(data.error)
        return data; // { message: 'User registered' }
    } catch (error: any) {
        if (error instanceof ApiError) {
            console.error(`Login Error: ${error.message}`)
        } else {
            const genericError = new ApiError('Unexpected error during login',)
            console.error('Unexpected error during login: ', error);
            throw genericError;
        }
    }
}