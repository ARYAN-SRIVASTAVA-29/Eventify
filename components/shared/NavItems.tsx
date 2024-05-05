'use client'

import { headerLinks } from '@/constants'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavItems = () => {
  const pathname = usePathname()

  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map((Links) => {
        const isActive = pathname === Links.route
        return(
          <li
          key={Links.route}
          className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={Links.route}>{Links.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems