import TrendsStyle from './trendsStyle.module.scss'

//Images
import linkedinIconBlack from '../../public/icons/linkedinBlack.png'
import facebookIconBlack from '../../public/icons/facebookBlack.png'
import instagramIconBlack from '../../public/icons/instagram-dark.png'
import LogoBlack from '../../public/icons/logoBlack.png'
import LanguageIconBlack from '../../public/icons/languageBlack.png'
import DropArrowBlack from "../../public/icons/downArrowBlack.png"
import HeroTrends from "../../public/img/Trends/heroTrends.png"

//Components
import Card from "@/components/Cards/Card/Card"
import Nav from "@/components/Nav/Nav"

//api
import getAllTrends from "@/services/api/getAllTrends"
import getConsaltingServices from '@/services/api/getConsaltingServices';
import Image from 'next/image'
import Header from '@/components/Header/Header'

export const metadata = {
  title: 'Trends'
}

async function page() {
  const trendsData = await getAllTrends()
  const consaltingServicesData = await getConsaltingServices()
  return (
    <div className={TrendsStyle.trendsMain}>
      <nav className={TrendsStyle.trendsNavbar}>
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
      src={HeroTrends}
      className={TrendsStyle.hero}
      />
      <div className={TrendsStyle.trendsInner}>
      <Header headline={'TRENDLƏR'} theCompHeader={'thePageHeader'}/>
      <div className={TrendsStyle.trendsGrid}>
      {
        trendsData.reverse().map((a,b)=>(
          <>
          <Card
          className={
            trendsData.length-1===3 ? TrendsStyle.card3
            : trendsData.length-1<=2 ? TrendsStyle.card2
            : trendsData.length-1>=3 ?  TrendsStyle.card :
            TrendsStyle.card}
          descDiv={'descDivNone'}
          key={a.id}
          alt={a.title}
          img={a.image}
          header={a.title}
          desc={a.short_description}
          link={`trends/${a.id}`}/>
          {b===0 && <div className={TrendsStyle.divider}></div>}
          </>
        ))
      }
      </div>
      </div>

      
    </div>
  )
}

export default page
