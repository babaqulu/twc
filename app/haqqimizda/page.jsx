
import Image from 'next/image';
import Aboutstyle from "./aboutstyle.module.scss"

//Image
import linkedinIconWhite from "../../public/icons/linkedin-white.png"
import facebookIconWhite from "../../public/icons/facebook-white.png"
import instagramIconWhite from "../../public/icons/instagram-white.png"
import LogoWhite from "../../public/icons/logoWhite.png"
import LanguageIconWhite from "../../public/icons/languageWhite.png"
import DropArrowWhite from "../../public/icons/downArrowWhite.png"
import BgMembers from '../../public/img/BG.png'


//Component
import MemberCard from "@/components/Cards/MemberCard/MemberCard"
import Grid from '@/components/ManualGrid/Grid';
import Hero from "@/components/Hero/Hero"
import Partners from '@/components/Partners/Partners';

//api
import getAbout from '@/services/api/getAbout';
import getAboutGrid from '@/services/api/getAboutGrid';
import getWorkers from '@/services/api/getWorkers';
import Header from '@/components/Header/Header';
import getPartnersBottom from '@/services/api/getPartnersBottom';
import MembersSlider from '@/components/MembersSwiper/MembersSlider';

export const metadata = {
  title: 'About us'
}

async function About() {


  const partnersBottomData = await getPartnersBottom()
  const about = await getAbout()
  const workersData = await getWorkers()
  const aboutGridData = await getAboutGrid()

  
  return (
    <div>
      <hero className={Aboutstyle.main}>

      <Hero
      heroImg={about.banner}
      heroText={about.banner_title}
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


      <div className={Aboutstyle.innerContainer}>

        <div className={Aboutstyle.descContainer}>
        <h1 className={Aboutstyle.title}>HAQQIMIZDA</h1>
        <div className={Aboutstyle.desc} dangerouslySetInnerHTML={{ __html: `${about.about}` }}></div>
        </div>



        <div className={Aboutstyle.membersContainer}>

          <Header headline={'KOMANDA'} theCompHeader={'theCompHeader'}/>
        <MembersSlider workersData={workersData}/>

      <Image
      className={Aboutstyle.bgMembers}
      src={BgMembers}
      width={100}
      height={100}/>
        </div>

        <Header headline={'VALUE CARE INTELLIGENCE'} theCompHeader={'theCompHeader'}/>
        {
          <div key={aboutGridData.id} 
          className={Aboutstyle.grid}>
              <Grid
              gridDirection={'GridSectionFlow'}
              HeroImg={'GridImg'}
              // gridInfo={'gridInfoNone'}
              img={aboutGridData.image_value}
              text={aboutGridData.value}
              />

              <Grid
              gridDirection={'GridSectionReverse'}
              HeroImg={'GridImg'}
              gridInfo={'gridInfoNone'}
              img={aboutGridData.image_care}
              GridPar={'ReversePar'}
              text={aboutGridData.care}
              header={'Care'}
              headerClass={'aboutGridHeaderReverse'}
              GridWithHeader={'gridHeaderDivReverse'}/>

              <Grid
              gridDirection={'GridSectionFlow'}
              HeroImg={'GridImg'}
              gridInfo={'gridInfoNone'}
              img={aboutGridData.image_intelligence}
              GridPar={'FlowPar'}
              text={aboutGridData.intelligence}
              header={'Intelligence'}
              headerClass={'aboutGridHeaderFlow'}
              GridWithHeader={'gridHeaderDivFlow'}/>
          </div>
        }


      <Header headline={'PARTNYOR VƏ MÜŞTƏRİLƏRİMİZ'} theCompHeader={'theCompHeader'}/>
      
      <Partners title={partnersBottomData.title} desc={partnersBottomData.description} img={partnersBottomData.banner} link={'haqqimizda/partners-clients'}/>

      </div>

    </div>
  )
}

export default About
