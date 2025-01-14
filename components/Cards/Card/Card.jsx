import Image from "next/image"
import MainMore_btn from "../../Buttons/MainMore_btn/MainMore_btn"
import CardStyle from "./CardStyle.module.scss"

function Card({className, horizontalContainer, horizontalImage, horizontalDesc, descDiv, alt, img, header, desc, shortDesc, link}) {
  return (
    <div className={`${CardStyle.container} ${className} ${CardStyle[horizontalContainer]}`}>
      <Image
      width={800}
      height={533}
      alt={alt}
      src={img}
      className={`${CardStyle.image} ${CardStyle[horizontalImage]}`}
      />

      <div className={CardStyle.innerContainer}>
      <h3 className={CardStyle.header}>{header}</h3>
      <p className={`${CardStyle.desc} ${CardStyle[horizontalDesc]}`}>{desc}</p>

      <div className={CardStyle[descDiv]} dangerouslySetInnerHTML={{ __html: `${shortDesc}` }}></div>
      <MainMore_btn link={link}/>
      </div>

    </div>
  )
}

export default Card
