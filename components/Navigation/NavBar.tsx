import React from 'react'
import NavLink from './NavLink'

function NavBar() {
    return (
        <nav className='flex justify-between'>
            <div>
                <NavLink href='/' label='Home' />
            </div>
            <div className='flex gap-x-4'>
                <NavLink href='/login' label='Login' />
                <NavLink href='/register' label='Register' />
            </div>
        </nav>
    )
}

export default NavBar