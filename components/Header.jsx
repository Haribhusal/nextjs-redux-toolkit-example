import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between items-center bg-slate-300 px-10 py-5'>
            <div>Logo</div>
            <nav className='flex gap-5'>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
            </nav>
        </header>
    )
}

export default Header