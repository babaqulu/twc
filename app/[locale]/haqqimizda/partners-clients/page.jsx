import partnersClientsStyle from './partnersClientsStyle.module.scss'

//Image
import linkedinIconWhite from "@/public/icons/linkedin-white.png"
import facebookIconWhite from "@/public/icons/facebook-white.png"
import instagramIconWhite from "@/public/icons/instagram-white.png"
import LogoWhite from "@/public/icons/logoWhite.png"
import LanguageIconWhite from "@/public/icons/languageWhite.png"
import DropArrowWhite from "@/public/icons/downArrowWhite.png"
import Hero from '@/components/Hero/Hero'


//component
import ClientsSlide from '@/components/ClientsLogoSwiper/clientsSlide'

//api
import getPartnersPage from "@/services/api/getPartnersPage"
import getPartners from '@/services/api/getPartners'
import getClientsPage from '@/services/api/getClientsPage'
import getClients from '@/services/api/getClients'
import Image from 'next/image'

async function page({ params }) {
  const locale = params?.locale;
  const partnersPageData = await getPartnersPage(locale)
  const partnersData = await getPartners(locale)
  const clientsPageData = await getClientsPage(locale)
  const clientsData = await getClients(locale)
  // const partnersLogos = await partnersData.map((logo)=>logo.logo)
  


  return (
    <div >
      <hero className={partnersClientsStyle.main}>
        <Hero
        heroImg={partnersPageData.banner}
        heroText={partnersPageData.banner_title}
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

      <div className={partnersClientsStyle.innerWrapper}>
        
      <div className={`${partnersClientsStyle.clientsWrapper} ${partnersClientsStyle.wrapper}`}>
      <h1 className={`${partnersClientsStyle.clientsTitle} ${partnersClientsStyle.title}`}>{clientsPageData.title}</h1>
      <div className={`${partnersClientsStyle.clientsDesc} ${partnersClientsStyle.desc}`} dangerouslySetInnerHTML={{ __html: `${clientsPageData.text}` }}></div>
      
      <ClientsSlide clientsData={clientsData}/>
      
      
      </div>

      <div className={`${partnersClientsStyle.partnersWrapper} ${partnersClientsStyle.wrapper}`}>

      <h1 className={`${partnersClientsStyle.partnersTitle} ${partnersClientsStyle.title}`}>{partnersPageData.header_title}</h1>

      <div className={`${partnersClientsStyle.partnersDesc} ${partnersClientsStyle.desc}`} dangerouslySetInnerHTML={{ __html: `${partnersPageData.description}` }}></div>

      <div className={partnersClientsStyle.partnersLogos}>
        {
          partnersData.map((logo)=>(
            <div className={partnersClientsStyle.logoContainer}>

              <Image
              className={partnersClientsStyle.partnersLogo}
              src={logo.logo}
              width={300}
              height={300}
              alt='Partners logo'/>
            </div>
          ))
        }
      </div>

        {/* <Image
        className={partnersClientsStyle.bg}
        src={Bg}
        width={200}
        height={200}/> */}
      </div>



      </div>
    </div>
  )
}

export default page
