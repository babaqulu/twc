
import eventStyle from './eventStyle.module.scss'

import linkedinIconBlack from '../../../public/icons/linkedinBlack.png'
import facebookIconBlack from '../../../public/icons/facebookBlack.png'
import instagramIconBlack from '../../../public/icons/instagram-dark.png'
import LogoBlack from '../../../public/icons/logoBlack.png'
import LanguageIconBlack from '../../../public/icons/languageBlack.png'
import DropArrowBlack from "../../../public/icons/downArrowBlack.png"

import Image from 'next/image'

import getEvent from '@/services/api/getEvent'
import getAllEvents from '@/services/api/getAllEvents'
import getConsaltingServices from '@/services/api/getConsaltingServices';
import Link from 'next/link'
import Nav from '@/components/Nav/Nav'

export const metadata = {
  title: 'Event'
}

export default async function Event({ params }) {
  const consaltingServicesData = await getConsaltingServices()
  const events = getAllEvents()
  const event = getEvent(params.eventId)
  const [eventsData, eventData] = await Promise.all([events, event])
  
  return (
    <div>
      <nav className={eventStyle.eventNav}>
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

      <div className={eventStyle.wrapper}>
        <div className={eventStyle.descWrapper}>
        <Image
        width={2000}
        height={2000}
        className={eventStyle.descImg}
        alt={"Trend hero image"}
        src={eventData.image}/>
        <h1 className={eventStyle.eventHeader}>{eventData.title}</h1>
        <div className={eventStyle.eventDesc} dangerouslySetInnerHTML={{ __html: eventData.description }}></div>
        
        </div>

        <div className={eventStyle.latestEvents}>
          <h4 className={eventStyle.cardHeader}>Ən son tədbir və xəbərlər</h4>

        <div className={eventStyle.eventsList}>
        {
          eventsData.filter((_,b)=>b>=eventsData.length-3).map((event)=>{
            return(
              <Link
              key={event.id}
              className={eventStyle.latestCardLink}
              href={`/events/${event.id}`}>
              <Image
              width={2000}
              height={2000}
              className={eventStyle.latestCardImg}
              alt='Latest'
              src={event.image}/>
              <div className={eventStyle.latestCardText}>
              {/* <p className={trendStyle.date}>{trend.created_date}</p> */}
              <p className={eventStyle.title}>{event.title.slice(0,50) + '...'}</p>
              <p className={eventStyle.titleSm}>{event.title.slice(0,20) + '...'}</p>
              </div>
              
              </Link>
            )
          })
        }

        </div>
          
        </div>

      </div>
      


    </div>
  )
}


