import ServiceStyle from './serviceStyle.module.scss'

//images
import linkedinIconWhite from "@/public/icons/linkedin-white.png"
import facebookIconWhite from "@/public/icons/facebook-white.png"
import instagramIconWhite from "@/public/icons/instagram-white.png"
import LogoWhite from "@/public/icons/logoWhite.png"
import LanguageIconWhite from "@/public/icons/languageWhite.png"
import DropArrowWhite from "@/public/icons/downArrowWhite.png"
import DropArrowBlack from "@/public/icons/downArrowBlack.png"

import Hero from '@/components/Hero/Hero'
import ImproveBussiness from '@/components/ImproveBussiness/ImproveBussiness'
import Image from 'next/image'

import getService from '@/services/api/getService'
import Grid from '@/components/ManualGrid/Grid'
import ContactForm from '@/components/ContactForm/ContactForm'


async function Service({ params }) {
  const { locale, serviceId } = params;
  const lang = locale || 'az';
  // Fetch service data
  const serviceData = await getService(serviceId, lang);
  console.log('Id:', serviceId, 'locale:',locale);
  return (
    <div>

      <Hero
      heroImg={serviceData.banner_image}
      heroText={serviceData.category}
      //Navbar props
      locale={locale}
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

      <div className={ServiceStyle.main}>
        <ImproveBussiness text={serviceData.title_eigth} />

        <div className={ServiceStyle.grid}>
          <Grid
            // GridPar={'gridParNone'}
            gridDirection={'GridServiceFlow'}
            HeroImg={'GridServiceImg'}
            img={serviceData.image_first}
            // gridInfo={'gridInfo'}
            regularText={serviceData.title_first}
          />

          <Grid
            // GridPar={'gridParNone'}
            gridDirection={'GridServiceReverse'}
            HeroImg={'GridServiceImg'}
            img={serviceData.image_second}
            // gridInfo={'gridInfoReverse'}
            regularText={serviceData.title_second}
          />

          <Grid
            // GridPar={'gridParNone'}
            gridDirection={'GridServiceFlow'}
            HeroImg={'GridServiceImg'}
            img={serviceData.image_third}
            // gridInfo={'gridInfo'}
            regularText={serviceData.title_third}
          />

        {
          serviceData.title_four &&
          <Grid
            // GridPar={'gridParNone'}
            gridDirection={'GridServiceReverse'}
            HeroImg={'GridServiceImg'}
            img={serviceData.image_four}
            // gridInfo={'gridInfoReverse'}
            regularText={serviceData.title_four}
          />
        }

        {
          serviceData.title_five &&
          <Grid
          // GridPar={'gridParNone'}
          gridDirection={'GridServiceFlow'}
          HeroImg={'GridServiceImg'}
          img={serviceData.image_five}
          // gridInfo={'gridInfo'}
          regularText={serviceData.title_five}
        />
        }
          
          {
          serviceData.title_six &&
          <Grid
            // GridPar={'gridParNone'}
            gridDirection={'GridServiceReverse'}
            HeroImg={'GridServiceImg'}
            img={serviceData.image_six}
            // gridInfo={'gridInfoReverse'}
            regularText={serviceData.title_six}
          />
        }
        {
          serviceData.title_seven && 
          <Grid
          // GridPar={'gridParNone'}
          gridDirection={'GridServiceFlow'}
          HeroImg={'GridServiceImg'}
          img={serviceData.image_seven}
          // gridInfo={'gridInfo'}
          regularText={serviceData.title_seven}
        />
        }




        </div>
      </div>
    </div>
  )
}

export default Service
