import Image from "next/image"
import Link from "next/link"

import ServiceIconStyle from "./serviceIconStyle.module.scss"


function serviceIcon({icon, text, link}) {
  return (
    <Link
    className={ServiceIconStyle.linkButton}
    href={`/${link}`}>
      <Image
      width={500}
      height={500}
      className={ServiceIconStyle.linkImg}
      src={icon}
      alt={text}/>
      <p className={ServiceIconStyle.text}>
      {text}
      </p>
      
    </Link>
  )
}

export default serviceIcon
