import FooterLinks from "../FooterLinks/FooterLinks"

import FooterStyle from './footerStyle.module.scss'

import getContact from "@/services/api/getContact"

async function Footer() {
  const contact = getContact()
  const contactData = await contact

  return (
    <div className={FooterStyle.footerContainer}>

      <div className={FooterStyle.innerContainer}>

        <div className={FooterStyle.subscribeContainer}>
          <h1 className={FooterStyle.footerHeader}>Uğura gedən yolda TWC ilə</h1>

          <div className={FooterStyle.input}>
            <input className={FooterStyle.footerEmail} type="email" placeholder="Email"/>
            <input className={FooterStyle.footerSubmit} type="submit" />
          </div>
        </div>

        <div className={FooterStyle.linksContainer}>
          <FooterLinks
          header={'ÜNVAN'}
          par1={contactData.address}
          hideShowP={'showP'}
          hideShowL={'hideL'}
          hideShowA={'hideA'}/>

          <FooterLinks
          header={'ŞİRKƏT'}
          link1Tittle1={'Haqqımızda'}
          link1Tittle2={'Məxfilik siyasəti'}
          link1Tittle3={'FAQ'}
          hideShowP={'hideP'}
          hideShowL={'showL'}
          hideShowA={'hideA'}/>

          <FooterLinks
          header={'SOSİAL ŞƏBƏKƏ'}
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
          header={'ƏLAQƏ'}
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
