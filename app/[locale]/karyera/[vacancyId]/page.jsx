import VacancyStyle from './vacancyStyle.module.scss'
import VacancyCard from '@/components/VacancyPage/Vacancy'
import Nav from '@/components/Nav/Nav'


import linkedinIconBlack from '@/public/icons/linkedinBlack.png'
import facebookIconBlack from '@/public/icons/facebookBlack.png'
import instagramIconBlack from '@/public/icons/instagram-dark.png'
import LogoBlack from '@/public/icons/logoBlack.png'
import LanguageIconBlack from '@/public/icons/languageBlack.png'
import DropArrowBlack from "@/public/icons/downArrowBlack.png"

import getVacancies from '@/services/api/getVacancies'
import getVacancy from '@/services/api/getVacancy' 
import getConsaltingServices from '@/services/api/getConsaltingServices';

async function Vacancy({ params }) {
  const { locale, vacancyId } = params;
  const lang = locale || 'az';
  const consaltingServicesData = await getConsaltingServices(lang)
  const vacanciesData = await getVacancies(lang)
  const vacancyData = await getVacancy(vacancyId,lang)

  

  return (
    <div className={VacancyStyle.main}>
      <nav className={VacancyStyle.vacancyNav}>
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

      
      <VacancyCard
      lang={lang}
      vacancyHeader={vacancyData.title}
      jobAboutText={vacancyData.text}
      />
    </div>
  )
}

export default Vacancy
