import Link from 'next/link'
import Event from '../Event/Event'
import eventsCompStyle from './eventsCompStyles.module.scss'



import Header from '@/components/Header/Header';

function eventsComp({eventsData, locale}) {
  

  return (
    <div className={eventsCompStyle.mainContainer}>

      <Header theCompHeader={'theCompHeader'} headline={locale === 'az' ? 'TƏDBİR VƏ XƏBƏRLƏR' : 'EVENTS AND NEWS'}/>

      <div className={eventsCompStyle.eventsContainer}>
      <Event  header={eventsData[0].title} eventHero={eventsData[0].image} desc={eventsData[0].description.slice(0,200) + '...'} link={`events/${eventsData[0].id}`}/>
      <div className={eventsCompStyle.line}></div>
      <Event header={eventsData[1].title} eventHero={eventsData[1].image} desc={eventsData[1].description.slice(0,190) + '...'} link={`events/${eventsData[1].id}`}/>
      </div>

      <Link
      className={eventsCompStyle.eventLink}
      href='/events'
      >
      {locale === 'az' ? "Hamısına bax" : "See all"}
      </Link>
    </div>

  )
}

export default eventsComp
