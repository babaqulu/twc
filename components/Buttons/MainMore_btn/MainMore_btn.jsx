import Image from 'next/image'
import Link from 'next/link'

import MainMore_btnStyle from "./MainMore_btnStyle.module.scss"
import Arrow from "@/public/icons/longRight.png"

function MainMore_btn({link, locale}) {
  
  return (
    <div className={MainMore_btnStyle.btn_container}>
    <Link href={`/${link}`}
    className={MainMore_btnStyle.btn_style}>
      <Image
      className={MainMore_btnStyle.moreIcon}
      src={Arrow}
      alt="More"
      />
      {locale === 'az' ? "Daha çox" : "More"}
    </Link>
    </div>


  )
}

export default MainMore_btn
