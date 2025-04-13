

import ElaqeStyle from './elaqeStyle.module.scss'
import Image from "next/image"

//Images
import linkedinIconBlack from '@/public/icons/linkedinBlack.png'
import facebookIconBlack from '@/public/icons/facebookBlack.png'
import instagramIconBlack from '@/public/icons/instagram-dark.png'
import LogoBlack from '@/public/icons/logoBlack.png'
import LanguageIconBlack from '@/public/icons/languageBlack.png'
import DropArrowBlack from "@/public/icons/downArrowBlack.png"
import Muraciet from "@/public/img/contact/muraciet.png"
import HeroElaqe from "@/public/img/Elaqe/heroElaqe.png"

//Components
import ContactForm from '@/components/ContactForm/ContactForm'
import Map from '@/components/Map/Map'

//api
import getContact from '@/services/api/getContact'
import getConsaltingServices from '@/services/api/getConsaltingServices'
import Nav from '@/components/Nav/Nav'
import FooterLinks from '@/components/FooterLinks/FooterLinks'

async function Contact({ params }) {
  const locale = params?.locale;

  const contactsData = await getContact(locale)
  const consaltingServicesData = await getConsaltingServices(locale)
  
  return (
    <div className={ElaqeStyle.main}>
        <nav className={ElaqeStyle.elaqeNavbar}>
        <Nav
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
      <Image
      width={400}
      height={100}
      src={contactsData.banner}
      className={ElaqeStyle.hero}
      />
      <div className={ElaqeStyle.innerContainer}>

      <div className={ElaqeStyle.contactInfo}>

        <div className={ElaqeStyle.contactsWrapper}>
        <h4 className={ElaqeStyle.contactsHeader}>{locale === 'az' ? "Bizimlə əlaqə saxlayın və ya ofisimizə yaxınlaşın" : "Contact us or visit our office"}</h4>

        <div className={ElaqeStyle.contacts}>
        <FooterLinks
            adressClass={'hideAdress'}
            par1={contactsData.email_first}
            par2={contactsData.number_first}
            par3={contactsData.number_second}
            hideShowP={'showPGray'}
            hideShowL={'hideL'}
            hideShowA={'hideA'}/>
        <FooterLinks
            adress={contactsData.address}
            adressClass={'showAdressGray'}
            hideShowP={'showPGray'}
            hideShowL={'hideL'}
            hideShowA={'hideA'}/>
        </div>
        
        </div>

        <Map />
      </div>

      <ContactForm locale = {locale}/>
      </div>
    </div>
  )
}

export default Contact
