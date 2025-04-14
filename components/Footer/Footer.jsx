import FooterLinks from "../FooterLinks/FooterLinks"

import FooterStyle from './footerStyle.module.scss'

import getContact from "@/services/api/getContact"

async function Footer({ locale }) {
  
  const contactData = await getContact(locale)

  

  return (
    <div className={FooterStyle.footerContainer}>

      <div className={FooterStyle.innerContainer}>

        <div className={FooterStyle.subscribeContainer}>
          <h1 className={FooterStyle.footerHeader}>{locale === 'az' ? "Uğura gedən yolda TWC ilə" : "On the road to success with TWC"}</h1>

          <div className={FooterStyle.input}>
            <input className={FooterStyle.footerEmail} type="email" placeholder="Email"/>
            <input className={FooterStyle.footerSubmit} type="submit" />
          </div>
        </div>

        <div className={FooterStyle.linksContainer}>
          <FooterLinks
          header={locale==='a' ? 'ÜNVAN' : 'ADDRESS'}
          par1={contactData.address}
          hideShowP={'showP'}
          hideShowL={'hideL'}
          hideShowA={'hideA'}/>

          <FooterLinks
          header={locale === 'az' ? 'ŞİRKƏT' : 'COMPANY'}
          link1Tittle1={locale === 'az' ? 'Haqqımızda' : 'About us'}
          link1Tittle2={locale === 'az' ? 'Məxfilik siyasəti' : 'Privacy policy'}
          link1Tittle3={'FAQ'}
          hideShowP={'hideP'}
          hideShowL={'showL'}
          hideShowA={'hideA'}/>

          <FooterLinks
          header={locale === 'az' ? 'SOSİAL ŞƏBƏKƏ' : 'SOCIAL MEDIA'}
          hideShowP={'hideP'}
          hideShowL={'hideL'}
          hideShowA={'showA'}
          ATittle1={'Linkedin'}
          ATittle2={'Facebook'}
          ATittle3={'Instagram'}
          link1={'https://www.linkedin.com/company/think-wise-business-consulting/?viewAsMember=true'}
          link2={'https://www.facebook.com/thinkwiseazerbaijan/'}
          link3={'https://www.instagram.com/twc.az/?next=%2F'}/>

          <FooterLinks
          header={locale === 'az' ? 'ƏLAQƏ' : 'CONTACT'}
          par1={contactData.email_first}
          par2={contactData.number_first}
          par3={contactData.number_second}
          hideShowP={'showP'}
          hideShowL={'hideL'}
          hideShowA={'hideA'}/>

        </div>

      </div>

      <p className={FooterStyle.footerText}>© 2021 Think Wise Consulting MMC</p>
    </div>
  )
}

export default Footer
