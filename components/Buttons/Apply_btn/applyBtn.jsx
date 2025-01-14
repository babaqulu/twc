import Image from 'next/image'
import Link from 'next/link'

import ApplyBtnStyle from "./applyBtnStyle.module.scss"
import Arrow from "../../../public/icons/longRight.png"

function ApplyBtn({link}) {
  return (
    <div className={ApplyBtnStyle.btn_container}>
    <Link href={`/${link}`}
    className={ApplyBtnStyle.btn_style}>
      Müraciət et
      <Image
      className={ApplyBtnStyle.moreIcon}
      src={Arrow}
      alt="More"
      />
    </Link>
    <Link href={`/${link}`}
    className={ApplyBtnStyle.btn_styleSm}>
      <Image
      className={ApplyBtnStyle.moreIcon}
      src={Arrow}
      alt="More"
      />
    </Link>
    </div>


  )
}

export default ApplyBtn
