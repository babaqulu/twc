import BlogsStyle from './blogsStyle.module.scss'
import Image from 'next/image'


//Image
import linkedinIconBlack from '@/public/icons/linkedinBlack.png'
import facebookIconBlack from '@/public/icons/facebookBlack.png'
import instagramIconBlack from '@/public/icons/instagram-dark.png'
import LogoBlack from '@/public/icons/logoBlack.png'
import LanguageIconBlack from '@/public/icons/languageBlack.png'
import DropArrowBlack from "@/public/icons/downArrowBlack.png"
import HeroBlogs from "@/public/img/Blogs/blogsHero.png"

//Components
import Card from "@/components/Cards/Card/Card"

import Header from '@/components/Header/Header'


import getAllBlogs from "@/services/api/getAllBlogs";
import getConsaltingServices from '@/services/api/getConsaltingServices';
import Nav from '@/components/Nav/Nav'


export const metadata = {
  title: 'Blogs'
}

async function Blogs({searchParams, params}) {
  const locale = params?.locale;
  const consaltingServicesData = await getConsaltingServices(locale)

  const query = searchParams?.query || '';
  const blogsData = await getAllBlogs(locale)
  // const blogsData = await blogs
  // const lastBlog = blogsData[blogsData.length-1]

  return (
    <div className={BlogsStyle.blogsMain}>

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


      <Image
      width={400}
      height={100}
      src={HeroBlogs}
      className={BlogsStyle.hero}
      />
      <div className={BlogsStyle.blogsInner}>
      <Header headline={locale==='az' ? 'MƏQALƏLƏR':'BLOGS'} theCompHeader={'thePageHeader'}/>
      <div className={BlogsStyle.latestBlog}>
      {
        blogsData.filter((_,b)=>b === blogsData.length-1).map((a)=>(
          <Card
          locale={locale}
          horizontalContainer={'horizontalContainer'}
          horizontalImage={'horizontalImage'}
          horizontalDesc={'horizontalDesc'}
          descDiv={'descDiv'}
          key={a.id}
          alt={a.title}
          img={a.image}
          header={a.title}
          shortDesc={a.description.slice(0,280)+'...'}
          link={`blogs/${a.id}`}/>
        ))
      }
      </div>


      <div className={BlogsStyle.blogsGrid}>
      {
        blogsData.filter((_,b)=>b<blogsData.length-1).reverse().map((a,b)=>(
          <>
          <Card
          className={
            blogsData.length-1===3 ? BlogsStyle.card3
            : blogsData.length-1<=2 ? BlogsStyle.card2
            : blogsData.length-1>=3 ?  BlogsStyle.card :
            BlogsStyle.card}
          descDiv={'descDivNone'}
          key={a.id}
          alt={a.title}
          img={a.image}
          header={a.title}
          desc={a.description}
          link={`blogs/${a.id}`}/>
          {b===0 && <div className={BlogsStyle.divider}></div>}
          </>
        ))
      }
      </div>

      <div className={BlogsStyle.blogsGridSm}>
      {
        blogsData.reverse().map((a,b)=>(
          <>
          <Card
          className={
            blogsData.length-1===3 ? BlogsStyle.card3
            : blogsData.length-1<=2 ? BlogsStyle.card2
            : blogsData.length-1>=3 ?  BlogsStyle.card :
            BlogsStyle.card}
          descDiv={'descDivNone'}
          key={a.id}
          alt={a.title}
          img={a.image}
          header={a.title}
          desc={a.description}
          link={`blogs/${a.id}`}/>
          {b===0 && <div className={BlogsStyle.divider}></div>}
          </>
        ))
      }
      </div>

      </div>
    </div>

  )
}

export default Blogs
