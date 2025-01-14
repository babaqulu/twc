
import trendStyle from './trendStyle.module.scss'

import linkedinIconBlack from '../../../public/icons/linkedinBlack.png'
import facebookIconBlack from '../../../public/icons/facebookBlack.png'
import instagramIconBlack from '../../../public/icons/instagram-dark.png'
import LogoBlack from '../../../public/icons/logoBlack.png'
import LanguageIconBlack from '../../../public/icons/languageBlack.png'
import DropArrowBlack from "../../../public/icons/downArrowBlack.png"

import Nav from "@/components/Nav/Nav"
import Image from 'next/image'
import Link from 'next/link'

import getTrend from "@/services/api/getTrend"
import getAllTrends from "@/services/api/getAllTrends"
import getConsaltingServices from '@/services/api/getConsaltingServices';

export const metadata = {
  title: 'Trend'
}

export default async function Trend({ params }) {
  const consaltingServicesData = await getConsaltingServices()
  const trends = getAllTrends()
  const trend = getTrend(params.trendId)
  const [trendsData, trendData] = await Promise.all([trends, trend])
  
  return (
    <div>
      <nav className={trendStyle.trendNav}>
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

      <div className={trendStyle.wrapper}>
        <div className={trendStyle.descWrapper}>
        <Image
        width={2000}
        height={2000}
        className={trendStyle.descImg}
        alt={"Trend hero image"}
        src={trendData.image}/>
        <h1 className={trendStyle.trendHeader}>{trendData.title}</h1>
        <div className={trendStyle.trendDesc} dangerouslySetInnerHTML={{ __html: trendData.description }}></div>
        
        </div>
        <div className={trendStyle.latestTrends}>
          <h4 className={trendStyle.cardHeader}>Ən son trenndlər</h4>

        <div className={trendStyle.trendsList}>
        {
          trendsData.filter((_,b)=>b>=trendsData.length-3).reverse().map((trend)=>{
            return(
              <Link
              key={trend.id}
              className={trendStyle.latestCardLink}
              href={`/trends/${trend.id}`}>
              <Image
              width={2000}
              height={2000}
              className={trendStyle.latestCardImg}
              alt='Latest'
              src={trend.image}/>
              <div className={trendStyle.latestCardText}>
              {/* <p className={trendStyle.date}>{trend.created_date}</p> */}
              <p className={trendStyle.title}>{trend.title}</p>
              <p className={trendStyle.titleSm}>{trend.title.slice(0,20) + '...'}</p>
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


