
// EXTERNAL IMPORTS
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

// IMAGE
import linkedinIconWhite from "../public/icons/linkedin-white.png"
import facebookIconWhite from "../public/icons/facebook-white.png"
import instagramIconWhite from "../public/icons/instagram-white.png"
import LogoWhite from "../public/icons/logoWhite.png"
import LanguageIconWhite from "../public/icons/languageWhite.png"
import DropArrowWhite from "../public/icons/downArrowWhite.png"
import DropArrowBlack from "@/public/icons/downArrowBlack.png"


// COMPONENTS
import Trends from "@/components/TrendsComp/Trends";
import BussinessLinks from "@/components/HomeBussinessLinks/BussinessLinks";
import Hero from "@/components/Hero/Hero";
import EventsComp from "../components/Events/EventsComp/EventsComp"
import MainProjects from "@/components/MainProjects/MainProjects";
import KaryeraComp from "@/components/KaryeraComp/KaryeraComp";
import BlogCardSwiper from "@/components/BlogCardSwiper/blogCardSwiper";

// API
import getAllBlogs from "@/services/api/getAllBlogs";
import getConsaltingServices from '@/services/api/getConsaltingServices'
import getMainPage from "@/services/api/getMainPage";
import getEvents from "@/services/api/getAllEvents";
import getMainProjects from "@/services/api/getMainProjects";
import Header from "@/components/Header/Header";




export default async function Home() {
  const eventsData = await getEvents()
  const main = await getMainPage();
  const mainProjectData = await getMainProjects()
  
  // BLOGS 
  const blogsData = await getAllBlogs()


  const servicesData = await getConsaltingServices()

  return (
    <div className={styles.homeContainer}>
    <main className={styles.main}>

    <Hero
      heroImg={main.image}
      heroText={main.title}
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
    </main>

    <section className={styles.sectionContainer}>

      <div className={styles.sectionTextDiv}>
        <h1 className={styles.sectionTittle}>Sizə necə kömək edə bilərik?</h1>
        <p className={styles.sectionParagraph}>Özəl, dövlət və sosial təşkilatlarla əməkdaşlıq edərək, biz qlobal təcrübəmizi və yerli anlayışlarımızı birləşdirərək real və davamlı dəyişiklik yaradırıq</p>
      </div>
      
      <BussinessLinks servicesData={servicesData} />

    </section>

    <Trends />
    <MainProjects mainProjectData={mainProjectData}/>
    <EventsComp eventsData={eventsData}/>


    <KaryeraComp/>
      <Header headline={'MƏQALƏLƏR'}/>

      <BlogCardSwiper blogsData={blogsData}/>


    </div>
  );
}