"use client"
// import React, { useState } from 'react'

import navStyles from '../Nav/nav.module.scss'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AzFlag from '@/public/icons/az-flag.png'
import EnFlag from '@/public/icons/en-flag.png'

import Link from 'next/link'
import Image from 'next/image'

function Language({language_btnColor,languageIconColor, languageIcon, languageDropIconColor, languageDropArrow}) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState('az');

  useEffect(() => {
    const locale = pathname.split('/')[1];
    setCurrentLocale(locale === 'en' ? 'en' : 'az');
  }, [pathname]);

  const toggleLocale = () => {
    const newLocale = currentLocale === 'az' ? 'en' : 'az';
    const segments = pathname.split('/');
  
    // Əgər path locale ilə başlayırsa → onu dəyiş
    if (segments[1] === 'az' || segments[1] === 'en') {
      segments[1] = newLocale;
    } else {
      // Əgər locale path-də yoxdursa (fallback)
      segments.unshift(newLocale);
    }
  
    const newPath = segments.join('/');
    router.replace(newPath, { scroll: false });
  };
  return (
    <div className={navStyles.languageContainer}>
    <button onClick={toggleLocale} className={`${navStyles.language_btn} ${navStyles[language_btnColor]}`}>
        <Image 
        // className={`${navStyles.languageIcon} ${navStyles[languageIconColor]}`}
        width={20}
        height={20}
        alt="Language selection"
        src={currentLocale === 'az' ? EnFlag : AzFlag}/>

          {currentLocale === 'az' ? 'EN' : 'AZ'}
        {/* <Image
        className={`${navStyles.languageDropIcon} ${navStyles[languageDropIconColor]}`}
        src={languageDropArrow}
        alt="Drop down"/> */}
      </button>


    </div>
  )
}

export default Language
