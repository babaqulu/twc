//her sehifeye bu komponenti tetbiq edib propla deyish source-u
import Image from 'next/image'

import Nav from "@/components/Nav/Nav";
import heroStyles from "./hero.module.scss";

import getConsaltingServices from '@/services/api/getConsaltingServices';



async function Hero({heroImg, heroText, linkedinIcon, facebookIcon, instagramIcon, socialmediaIconColor, Logo, navListLinkColor, serviceListLinkColor, heroTitle, languageIcon, languageDropArrow, languageIconColor, languageDropIconColor, language_btnColor, infoContainerColor, contactTextColor, logoImgColor, dropIcon, dropIconColor }) {
  const consaltingServicesData = await getConsaltingServices()

  // const serviceTitles=[]
  // serviceTitles.push(...consaltingServicesData[1].subcategory)
  
  
  return (
    <div className={heroStyles.heroSection}>
      <Image
      width={5200}
      height={5000}

      className={heroStyles.heroImg}
      // className={heroImgStyle}
      src={heroImg}
      alt="Hero image"
      />
      <div className={heroStyles.imageColor}></div>
      

      <Nav
      consaltingServicesData= {consaltingServicesData}
      contactTextColor={contactTextColor}
      linkedinIcon={linkedinIcon}
      facebookIcon={facebookIcon}
      instagramIcon={instagramIcon}
      socialmediaIconColor={socialmediaIconColor}
      Logo={Logo}
      logoImgColor={logoImgColor}
      navListLinkColor={navListLinkColor}
      serviceListLinkColor={serviceListLinkColor}
      language_btnColor={language_btnColor}
      languageIcon={languageIcon}
      languageDropIconColor={languageDropIconColor}
      languageIconColor={languageIconColor}
      languageDropArrow={languageDropArrow}
      infoContainerColor={infoContainerColor}
      dropIcon={dropIcon}
      dropIconColor={dropIconColor}/>

      <div className={heroStyles.heroContainer}>
      <h1 className={heroStyles[heroTitle]}>
        {heroText}
      </h1>
      </div>

    </div>
  )
}

export default Hero
