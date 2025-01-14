
import FaqStyle from './faqStylee.module.scss'
import Nav from '@/components/Nav/Nav'

import linkedinIconBlack from '../../public/icons/linkedinBlack.png'
import facebookIconBlack from '../../public/icons/facebookBlack.png'
import instagramIconBlack from '../../public/icons/instagram-dark.png'
import LogoBlack from '../../public/icons/logoBlack.png'
import LanguageIconBlack from '../../public/icons/languageBlack.png'
import DropArrowBlack from "../../public/icons/downArrowBlack.png"

import getFaq from '@/services/api/getFaq'
import getConsaltingServices from '@/services/api/getConsaltingServices';

async function Faq() {
  const faq = await getFaq()
  const consaltingServicesData = await getConsaltingServices()
  return (
    <div className={FaqStyle.main}>
      <nav className={FaqStyle.faqNav}>
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

      <div className={FaqStyle.insideContainer}>
        <h4 className={FaqStyle.header}>FAQ</h4>

          
        <div className={FaqStyle.questionAnswer}>
          
            <div className={FaqStyle.question} dangerouslySetInnerHTML={{ __html: faq.text }}></div>

        </div>
      </div>

    </div>
  )
}

export default Faq
