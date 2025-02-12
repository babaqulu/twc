//nextjs
import Image from 'next/image'
import karyeraStyle from './karyeraStyle.module.scss'

//Components
import Hero from '@/components/Hero/Hero'
import EmployeeCard from '@/components/Cards/EmployeeCard/employeeCard'
import VacancySearch from '@/components/VacancySearch/vacancySearch'

// IMAGE
import linkedinIconWhite from "../../public/icons/linkedin-white.png"
import facebookIconWhite from "../../public/icons/facebook-white.png"
import instagramIconWhite from "../../public/icons/instagram-white.png"
import LogoWhite from "../../public/icons/logoWhite.png"
import LanguageIconWhite from "../../public/icons/languageWhite.png"
import DropArrowWhite from "../../public/icons/downArrowWhite.png"
import Chain from "../../public/img/karyera/chain.png"
import AboutVacancyCard from '@/components/AboutVacancyCard/AboutVacancyCard'
import BgKaryera from '../../public/img/BG.png'

//api
import getCarrierPage from '@/services/api/getCarrierPage'
import getVacancies from '@/services/api/getVacancies'
import getInterns from '@/services/api/getInterns'
import getCarrierBottom from '@/services/api/getAllCarrierBottoms'
import KaryeraBottomCard from '@/components/Cards/KaryeraBottomCard/KaryeraBottomCard'

export const metadata = {
  title: 'Karyera'
}

async function Karyera() {
  const internsData = await getInterns()
  const carrierPageData = await getCarrierPage()
  const vacanciesData = await getVacancies()
  const carrierBottomData = await getCarrierBottom()


  return (
    <div className={karyeraStyle.karyeraMain}>
      <hero>
      <Hero
      heroImg={carrierPageData.banner}
      heroText={carrierPageData.banner_title}
      //Navbar props
      contactTextColor={'contactTextWhite'}
      linkedinIcon={linkedinIconWhite}
      facebookIcon={facebookIconWhite}
      instagramIcon={instagramIconWhite}
      socialmediaIconColor={'socialmediaIconColorWhite'}
      Logo={LogoWhite}
      logoImgColor={'logoImgWhite'}
      navListLinkColor={'navListLinkWhite'}
      serviceListLinkColor={'serviceListLinkWhite'}
      heroTitle={'heroTitleWhite'}
      language_btnColor={'language_btnWhite'}
      languageIconColor={'languageIconWhite'}
      languageDropIconColor={'languageDropIconWhite'}
      languageIcon={LanguageIconWhite}
      languageDropArrow={DropArrowWhite}
      infoContainerColor={'infoContainerWhite'}
      dropIcon={DropArrowWhite}
        dropIconColor={'downArrowWhite'}
        />
      </hero>


      <VacancySearch vacanciesData={vacanciesData} />

      <div className={karyeraStyle.innerMain}>
      <h1 className={karyeraStyle.title}>{carrierPageData.title}</h1>
      <div className={karyeraStyle.desc} dangerouslySetInnerHTML={{ __html: `${carrierPageData.description}` }}></div>
      <div className={karyeraStyle.internsDiv}>
      {internsData.map((a)=>(
        <EmployeeCard
        key={a.id}
      wrapperBg={'wrapperBg'}
      rectangleHorizontal={'rectangleHorizontal'}
      img={a.image}
      imgHorizontal={'imgHorizontal'}
      backgroundImg={a.background}
      bg={'bg'}
      employee={a.name}
      employeeName={'employeeName'}
      jobDesc={a.position}/>
      ))}
      </div>
      <Image
      className={karyeraStyle.bgKaryera}
      src={BgKaryera}
      width={100}
      height={100}/>
      </div>

      <div className={karyeraStyle.vacancies}>
        <h3 className={karyeraStyle.vacancyTitle}>Vakansiyalar</h3>
        {
          vacanciesData.filter((vacancyActive)=>vacancyActive.is_active===true).map((vacancy)=>{
            return(
              <AboutVacancyCard key={vacancy.id} link={`karyera/${vacancy.id}`} vacancy={vacancy.title} jobInfoTextAbout={vacancy.text.slice(0,207) + '...'}/>
            )
          })
        }
      </div>
      
      <div className={karyeraStyle.bottomLinks}>
        {
          carrierBottomData.map((a)=>(
            <KaryeraBottomCard 
            key={a.id}
            link={`karyera/advanntages/${a.id}`}
            img={a.image}
            title={a.title}
            BottomBg={a.background}/>
          ))
        }
      </div>
    </div>
  )
}

export default Karyera
