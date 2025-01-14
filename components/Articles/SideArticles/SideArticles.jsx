import Image from 'next/image'

import SideArticleStyle from "./sideArticlesStyles.module.scss"

function sideArticles({img, imgAlt, tittle, navigation, header, date}) {
  return (
    <div className={SideArticleStyle.sAContainer}>
      <Image
      width={500}
      height={500}
      className={SideArticleStyle.sAimg}
      src={img}
      alt={imgAlt}/>
      <div className={SideArticleStyle.sAInfoContainer}>
      <p className={SideArticleStyle.sAtittle}>{tittle} <span className={SideArticleStyle.sAnavigation}> | {navigation}</span></p>
      <h4 className={SideArticleStyle.sAheader}>{header}</h4>
      <p className={SideArticleStyle.sAdate}>{date}</p>
      </div>
    </div>
  )
}

export default sideArticles
