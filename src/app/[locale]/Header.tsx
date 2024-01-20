'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import LanguageButton from './LanguageButton'

const Header = ({ params }: { params: { locale: string } }) => {
    const pathName = usePathname().split('/', 3)[2] !== undefined ? usePathname().split('/', 3)[2] : "/";
  return (
    <>
        <LanguageButton params={params} to={pathName}/>
    </>
  )
}

export default Header