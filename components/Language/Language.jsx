// "use client"
// import React, { useState } from 'react'

import navStyles from '../Nav/nav.module.scss'



import Link from 'next/link'
import Image from 'next/image'

function Language({language_btnColor,languageIconColor, languageIcon, languageDropIconColor, languageDropArrow}) {

  return (
    <div className={navStyles.languageContainer}>
    <button className={`${navStyles.language_btn} ${navStyles[language_btnColor]}`}>
        <Image 
        className={`${navStyles.languageIcon} ${navStyles[languageIconColor]}`}
        alt="Language selection"
        src={languageIcon}/>

          AZ
        <Image
        className={`${navStyles.languageDropIcon} ${navStyles[languageDropIconColor]}`}
        src={languageDropArrow}
        alt="Drop down"/>
      </button>


    </div>
  )
}

export default Language
