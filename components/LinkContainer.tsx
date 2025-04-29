import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React from 'react'

const LinkContainer = ({ href, children, ...props }:
    { href: Url | string, children: React.ReactNode }) => {
    return (
        <Link href={href} {...props} scroll={false} passHref legacyBehavior>
            {children}
        </Link>
    )
}


export default LinkContainer