
import EventsPageStyle from './eventsPageStyle.module.scss'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Card from "@/components/Cards/Card/Card"
import Nav from "@/components/Nav/Nav"

//Images
import linkedinIconBlack from '@/public/icons/linkedinBlack.png'
import facebookIconBlack from '@/public/icons/facebookBlack.png'
import instagramIconBlack from '@/public/icons/instagram-dark.png'
import LogoBlack from '@/public/icons/logoBlack.png'
import LanguageIconBlack from '@/public/icons/languageBlack.png'
import DropArrowBlack from "@/public/icons/downArrowBlack.png"
import HeroEvents from "@/public/img/Events/HeroEvents.png"

import getConsaltingServices from '@/services/api/getConsaltingServices';
import getAllEvents from '@/services/api/getAllEvents';

export const metadata = {
  title: 'Events'
}

async function page({params}) {
  const locale = params?.locale;
  const consaltingServicesData = await getConsaltingServices(locale)
  const eventsData = await getAllEvents(locale)
  const lastEvent =  eventsData.length
  
  
  return (
    <div className={EventsPageStyle.eventsMain}>
      <nav className={EventsPageStyle.eventsNavbar}>
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
      src={HeroEvents}
      className={EventsPageStyle.hero}
      />
      <div className={EventsPageStyle.eventsInner}>
      <Header headline={locale === 'az' ? 'TƏDBİR VƏ XƏBƏRLƏR' : 'EVENTS AND NEWS'} theCompHeader={'thePageHeader'}/>

      <div className={EventsPageStyle.latestEvent}>
      {
        eventsData.filter((_,b)=>b === 0).map((a)=>(
          <Card
          horizontalContainer={'horizontalContainer'}
          horizontalImage={'horizontalImage'}
          horizontalDesc={'horizontalDesc'}
          descDiv={'descDiv'}
          key={a.id}
          alt={a.title}
          img={a.image}
          header={a.title}
          link={`events/${a.id}`}
          shortDesc={a.description.slice(0,280)+'...'}/>
        ))
      }
      </div>


      <div className={EventsPageStyle.eventsGrid}>
      {
        eventsData.filter((_,b)=>b<eventsData.length-1).reverse().map((a,b)=>(
          <>
          <Card
          className={
            eventsData.length-1===3 ? EventsPageStyle.card3
            : eventsData.length-1<=2 ? EventsPageStyle.card2
            : eventsData.length-1>=3 ?  EventsPageStyle.card :
            EventsPageStyle.card
            
          }
          horizontalDesc={'horizontalDesc'}
          descDiv={'descDiv'}
          key={a.id}
          alt={a.title}
          img={a.image}
          header={a.title}
          shortDesc={a.description.slice(0,280)+'...'}
          link={`events/${a.id}`}/>
          {b===0 && <div className={EventsPageStyle.divider}></div>}
          </>
        ))
      }
      </div>

      <div className={EventsPageStyle.eventsGridSm}>
      {
        eventsData.reverse().map((a,b)=>(
          <>
          <Card
          className={
            eventsData.length-1===3 ? EventsPageStyle.card3
            : eventsData.length-1<=2 ? EventsPageStyle.card2
            : eventsData.length-1>=3 ?  EventsPageStyle.card :
            EventsPageStyle.card
            
          }
          horizontalDesc={'horizontalDesc'}
          descDiv={'descDiv'}
          key={a.id}
          alt={a.title}
          img={a.image}
          header={a.title}
          shortDesc={a.description.slice(0,280)+'...'}
          link={`events/${a.id}`}/>
          {b===0 && <div className={EventsPageStyle.divider}></div>}
          </>
        ))
      }
      </div>

      </div>

      
    </div>
  )
}
export default page
