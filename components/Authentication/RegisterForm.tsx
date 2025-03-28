"use client"


import React, { useEffect } from 'react'
import { useActionState } from 'react'
import { registerAction } from '@/actions/authActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function RegisterForm() {

    const actionReturnDataSkeleton = {
        errors: {},
        serverError: null,
        success: false,
        name: "",
        email: "",
    };

    const [state, action, isPending] = useActionState(registerAction, actionReturnDataSkeleton);
    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            router.push("/login");
        }
    }, [state.success, router])

    return (
        <form
            action={action}
            className='bg-white mt-8 px-8 py-4 rounded-lg shadow-custom-200 w-full max-w-lg mx-auto space-y-4'
        >
            <h1 className='text-center font-extrabold text-2xl text-gray-800 mb-6'>Register</h1>
            <div className='flex flex-col'>
                <label
                    htmlFor="name"
                    className='text-gray-700 font-semibold mb-2'
                >
                    Name:
                </label>
                <input
                    type="text"
                    name='name'
                    defaultValue={state?.name}
                    placeholder='Enter username'
                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300 ease-in-out'
                />
                {state?.errors.name && (
                    <div className='error my-2 text-pink-700 tracking-tight'>
                        <ul className='list-disc list-inside'>
                            {
                                state?.errors?.name?.map((err) => (
                                    <li key={err}>{err}</li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>

            <div className='flex flex-col'>
                <label
                    htmlFor="email"
                    className='text-gray-700 font-semibold mb-2'
                >
                    Email:
                </label>
                <input
                    type="text"
                    name='email'
                    defaultValue={state?.email}
                    placeholder='Enter email'
                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300 ease-in-out'
                />
                {state?.errors?.email && <p className='text-pink-700 tracking-tight my-2'>{state.errors.email}</p>}
            </div>

            <div className='flex flex-col justify-center'>
                <label
                    htmlFor="password"
                    className='text-gray-700 font-semibold mb-2'
                >
                    Password:
                </label>

                <input
                    type="password"
                    name='password'
                    placeholder='Enter password'
                    className='relative w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300 ease-in-out'
                />
                {state?.errors?.password && (
                    <div className='error my-2 text-pink-700 tracking-tight' >
                        <p className='mb-1'>Password must:</p>
                        <ul className='list-disc list-inside ml-4'>
                            {state.errors.password?.map((err) => (
                                <li key={err}>{err}</li>
                            ))}
                        </ul>
                    </div>

                )}
            </div>

            <div className='flex flex-col'>
                <label
                    htmlFor="confirmPassword"
                    className='text-gray-700 font-semibold mb-2'
                >
                    Confirm Password:
                </label>
                <input
                    type="password"
                    name='confirmPassword'
                    placeholder='Confirm entered password'
                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300 ease-in-out'
                />
                {<p className='text-pink-700 tracking-tight my-2'>{state?.errors?.confirmPassword}</p>}
            </div>
            {
                state?.serverError && (
                    <div className='text-pink-700 font-semibold text-center'>{state.serverError}</div>
                )
            }
            <div className='flex flex-col'>
                <button
                    type='submit'
                    disabled={isPending}
                    className='w-full p-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition duration-300 ease-in-out disabled:opacity-50'
                >
                    {isPending ? 'Loading...' : 'Register'}
                </button>
            </div>

            <div className='text-center mt-4'>
                <Link
                    href='/login'
                    className='text-amber-500 hover:text-amber-600 hover:underline transition duration-300 ease-in-out'
                >
                    or Login here
                </Link>
            </div>
        </form>
    )
}

export default RegisterForm