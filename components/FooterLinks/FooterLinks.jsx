import Link from 'next/link'
import footerLinksStyle from './footerLinksStyle.module.scss'


function FooterLinks({header,adressClass, adress, par1, par2, par3, link1, link2, link3, link1Tittle1, link1Tittle2, link1Tittle3, ATittle1, ATittle2, ATittle3, hideShowP, hideShowL, hideShowA}) {
  return (
    <div className={footerLinksStyle.container}>

      <h1 className={footerLinksStyle.header}>{header}</h1>
      <p className={adressClass}>{adress}</p>
      <p className={hideShowP}>{par1}</p>
      <p className={hideShowP}>{par2}</p>
      <p className={hideShowP}>{par3}</p>

      <Link href={'/haqqimizda'}
      className={hideShowL}>
      {link1Tittle1}
      </Link>
      <Link href={'/privacyPolicy'}
      className={hideShowL}>
      {link1Tittle2}
      </Link>
      <Link href={'/faq'}
      className={hideShowL}>
      {link1Tittle3}
      </Link>
      
      <a className={hideShowA} href={link1} target="_blank">{ATittle1}</a>
      <a className={hideShowA} href={link2} target="_blank">{ATittle2}</a>
      <a className={hideShowA} href={link3} target="_blank">{ATittle3}</a> 
    </div>
  )
}

export default FooterLinks
