import Image from 'next/image'

import MainArticleStyle from "./mainArticleStyle.module.scss"

import BlueMore_btn from "../../Buttons/BlueMore_btn/MoreBtn";


function mainArticle({ link, img, imgAlt, tittle, navigation, header, desc, date}) {
  return (
    <div  className={MainArticleStyle.mAContainer}>
      <Image
      width={500}
      height={500}
      className={MainArticleStyle.mAimg}
      src={img}
      alt={imgAlt}/>

      <div className={MainArticleStyle.mAInfoContainer}>
        <p className={MainArticleStyle.mAtittle}>{tittle} <span className={MainArticleStyle.mAnavigation}> | {navigation}</span></p>
        <h4 className={MainArticleStyle.mAheader}>{header}</h4>
        <div className={MainArticleStyle.mAdesc} dangerouslySetInnerHTML={{ __html: desc }}></div>
        <BlueMore_btn link={link} bluebtn_style={"sliderLinkBlack"}/>
        <p className={MainArticleStyle.mAdate}>{date}</p>
      </div>
    </div>
  )
}

export default mainArticle
