
import bottomStyle from './bottomStyle.module.scss'

import linkedinIconBlack from '@/public/icons/linkedinBlack.png'
import facebookIconBlack from '@/public/icons/facebookBlack.png'
import instagramIconBlack from '@/public/icons/instagram-dark.png'
import LogoBlack from '@/public/icons/logoBlack.png'
import LanguageIconBlack from '@/public/icons/languageBlack.png'
import DropArrowBlack from "@/public/icons/downArrowBlack.png"

import Nav from "@/components/Nav/Nav"
import Image from 'next/image'
import Link from 'next/link'

import getCarrierBottom from '@/services/api/getCarrierBottom'
import getConsaltingServices from '@/services/api/getConsaltingServices';

export const metadata = {
  title: 'Carrier advantages'
}

export default async function Advantages({ params }) {
  const { locale, bottomId } = params;
  const lang = locale || 'az';
  const consaltingServicesData = await getConsaltingServices(lang)
  const bottomData = await getCarrierBottom(bottomId, lang)
  
  
  return (
    <div>
      <nav className={bottomStyle.trendNav}>
      <Nav
        locale = {locale}
        consaltingServicesData={consaltingServicesData}
        navMini={'navMini'}
        activeNavMini={'activeNavMini'}
        contactTextColor={'contactTextBlack'}
        linkedinIcon={linkedinIconBlack}
        facebookIcon={facebookIconBlack}
        instagramIcon={instagramIconBlack}
        socialmediaIconColor={'socialmediaIconColorBlack'}
        Logo={LogoBlack}
        logoImgColor={'logoImgBlack'}
        navListLinkColor={'navListLinkBlack'}
        serviceListLinkColor={'serviceListLinkBlack'}
        heroTitle={'heroTitleBlack'}
        language_btnColor={'language_btnBlack'}
        languageIconColor={'languageIconBlack'}
        languageDropIconColor={'languageDropIconBlack'}
        languageIcon={LanguageIconBlack}
        languageDropArrow={DropArrowBlack}
        infoContainerColor={'infoContainerBlack'}
        dropIcon={DropArrowBlack}
        dropIconColor={'downArrowBlack'}/>
      </nav>

      <div className={bottomStyle.wrapper}>
        <div className={bottomStyle.descWrapper}>
        <Image
        width={2000}
        height={2000}
        className={bottomStyle.descImg}
        alt={"Trend hero image"}
        src={bottomData.image}/>
        <h1 className={bottomStyle.trendHeader}>{bottomData.title}</h1>
        <div className={bottomStyle.trendDesc} dangerouslySetInnerHTML={{ __html: bottomData.description }}></div>
        
        </div>
      </div>
      


    </div>
  )
}


