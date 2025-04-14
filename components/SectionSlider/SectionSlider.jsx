
import sectionStyle from "./sectionSlider.module.scss"
import Image from "next/image";

import More_btn from "../Buttons/BlueMore_btn/MoreBtn";

import getDoingBussiness from "@/services/api/getDoingBussiness"


async function sectionSlider({text, link}) {

  const doingBussiness = getDoingBussiness()
  const doingBussinessData = await doingBussiness

  return (
    <div className={sectionStyle.sliderContainer}>

      <Image 
      key={doingBussinessData.id}
        width={2000}
        height={2000}
        className={sectionStyle.heroImg}
        src={doingBussinessData.image}
        alt="Bussiness Image"
        />
      <div className={sectionStyle.sliderInfo}>
        <h3 className={sectionStyle.sliderText}>{text}</h3>
        <More_btn link={link} bluebtn_style={"sliderLink"}/>
        
      </div>
      
      {/* <Image
      className={sectionStyle.sliderImg}
      src={sectionimg}
      alt="Section main image"/> */}
    </div>
  )
}

export default sectionSlider
