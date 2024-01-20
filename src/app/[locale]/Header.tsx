'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import LanguageButton from './LanguageButton'

const Header = ({ params }: { params: { locale: string } }) => {
    const currentPath = usePathname().split('/', 3)[2];
    const toPath = currentPath !== undefined ? currentPath : "/";
  return (
    <>
        <LanguageButton params={params} to={toPath}/>
    </>
  )
}

export default Header