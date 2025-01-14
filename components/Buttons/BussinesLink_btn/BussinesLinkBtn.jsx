import btnStyles from "./link_btn.module.scss"
import Link from "next/link"


function link_btn({text, link}) {
  return (

    <Link href={`/${link}`}
    className={btnStyles.link}>
      {text}
    </Link>



  )
}

export default link_btn
