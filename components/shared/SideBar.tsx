"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const SideBar = () => {

    const pathname = usePathname();
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href="/" className='sidebar-logo'>
                <Image src="/assets/images/logo-icon.svg" alt="logo" width={50} height={28} /> AI PHOTO EDITOR
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname;
                            return (
                                <li key={link.route} className={`side-bar_element group ${isActive ? 'bg-purple-gradient text-white' :  'text-gray-700'}`}>
                                    {link.label}
                                </li>
                            )
                        })}

                    </ul>
                </SignedIn>

            </nav>
        </div>

    </aside>
  )
}

export default SideBar