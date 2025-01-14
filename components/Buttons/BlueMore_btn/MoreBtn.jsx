import Image from "next/image"
import Link from "next/link"

import BlueArrow from "../../../public/icons/longBlueRight.png"

import More_btnStyle from "./more_btn.module.scss"


function more_btn({ link}) {
  return (

    <Link
    className={More_btnStyle.bluebtn_style}
    href={`/${link}`}>
      Ətraflı
      </Link>

  )
}

export default more_btn
