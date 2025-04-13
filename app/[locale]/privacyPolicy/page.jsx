
import PrivacyPolicyStyle from './privacyPolicyStyle.module.scss'
import Nav from '@/components/Nav/Nav'

import linkedinIconBlack from '@/public/icons/linkedinBlack.png'
import facebookIconBlack from '@/public/icons/facebookBlack.png'
import instagramIconBlack from '@/public/icons/instagram-dark.png'
import LogoBlack from '@/public/icons/logoBlack.png'
import LanguageIconBlack from '@/public/icons/languageBlack.png'
import DropArrowBlack from "@/public/icons/downArrowBlack.png"

import getPrivacy from '@/services/api/getPrivacy'
import getConsaltingServices from '@/services/api/getConsaltingServices';

export const metadata = {
  title: 'Privacy and Policy'
}

async function page({ params }) {
  const locale = params?.locale;

  const consaltingServicesData = await getConsaltingServices(locale)
  const privacyData = await getPrivacy(locale)
  return (
    <div className={PrivacyPolicyStyle.main}>
      <nav className={PrivacyPolicyStyle.privacyNav}>
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

      <div className={PrivacyPolicyStyle.insideContainer}>
        <h4 className={PrivacyPolicyStyle.mainheader}>Məxfilik siyasəti</h4>

        <div className={PrivacyPolicyStyle.info} >
          
        <div className={PrivacyPolicyStyle.infoInner} 
        dangerouslySetInnerHTML={{ __html: privacyData.text }}></div>
        
        </div>
      </div>

    </div>
  )
}

export default page
