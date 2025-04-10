'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function NavLink({ label, href }: { label: string, href: string }) {

    const path = usePathname();

    return (
        <Link href={href}
            className={`${path === href ? 'bg-amber-400 text-white shadow-solid' : ''} py-2 px-4 flex m-2 border-2 border-amber-500 rounded-md transition duration-300 ease-out`}>
            {label}
        </Link>
    )
}

export default NavLink