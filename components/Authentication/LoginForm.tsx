'use client';

import { loginAction } from '@/actions/authActions';
import Link from 'next/link';
import React, { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { createSession } from '@/lib/session';

function LoginForm() {
    const router = useRouter();

    const actionReturnDataSkeleton = {
        errors: {},
        token: '',
        serverError: null,
        success: false,
        email: '',
    }
    const [state, action, isPending] = useActionState(loginAction, actionReturnDataSkeleton);

    useEffect(() => {
        const successRes = async () => {

            if (state?.success) {
                await createSession("session", state.token);
                router.push('/')
            }
        }
        successRes();
    }, [state?.success, router])
    return (
        <form action={action}
            className='bg-white mt-8 px-8 py-2 shadow-custom-200 rounded-lg w-full max-w-lg mx-auto space-y-4'>
            <h1 className='text-center font-extrabold text-2xl text-gray-800 mb-6'>Login</h1>
            <div className='flex flex-col'>
                <label htmlFor="email"
                    className='text-gray-700 font-semibold mb-2'>Email:</label>
                <input type="text" name='email' defaultValue={state?.email} placeholder='Enter registered email'
                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300 ease-in-out' />
                {state?.errors?.email && <p className='text-pink-700 tracking-tight'>{state.errors.email}</p>}
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password"
                    className='text-gray-700 font-semibold mb-2'>Password:</label>
                <input type="password" name='password' placeholder='Enter your password'
                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300 ease-in-out' />
                {state?.errors?.password && (
                    <div className='error my-2 text-pink-700 tracking-tight'>
                        <ul className='list-inside list-disc'>
                            {state?.errors?.password.map((err) => (
                                <li key={err}>{err}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {
                state.serverError && (
                    <div className='error text-pink-700 tracking-tight text-center'>{state.serverError}</div>
                )
            }
            <div className='flex flex-col'>
                <button type='submit' disabled={isPending}
                    className='w-full p-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50  transition duration-300 ease-in-out cursor-pointer disabled:opacity-50'>
                    {isPending ? 'Loading...' : 'Login'}</button>
            </div>
            <div className='text-center mt-4'>
                <Link href={'/register'}
                    className='text-amber-500 hover:text-amber-600 hover:underline transition duration-300 ease-in-out'>or Register here</Link>
            </div>
        </form>
    )
}

export default LoginForm