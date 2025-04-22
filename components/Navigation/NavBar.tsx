import React from 'react'
import NavLink from './NavLink'
import { getCurrentUser } from '@/lib/session'
import { logout } from '@/actions/authActions';

async function NavBar() {
    const user = await getCurrentUser();

    return (
        <nav className='flex justify-between'>
            <div>
                <NavLink href='/' label='Home' />
            </div>
            <div className='flex gap-x-4'>
                {!user ? (
                    <>
                        <NavLink href='/login' label='Login' />
                        <NavLink href='/register' label='Register' />
                    </>)

                    : (
                        <form action={logout}>
                            <button className='py-2 px-4 flex m-2 border-2 border-amber-500 rounded-md cursor-pointer transition duration-300 ease-out'>Logout</button>
                        </form>
                    )
                }

            </div>
        </nav>
    )
}

export default NavBar