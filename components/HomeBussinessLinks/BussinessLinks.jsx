"use client"
import React, { useState } from 'react'


import BussinessLinksStyle from './BussinessLinksStyle.module.scss'
import BussinesLink_btn from "@/components/Buttons/BussinesLink_btn/BussinesLinkBtn"
import Image from 'next/image'

import BackArrow from '../../public/icons/longRightDark.png'



  function BussinessLinks({servicesData}) {
  const [serviceBtn, setOpenServiceBtn] = useState(false)
  const [sectionBtn, setOpenSectionBtn] = useState(true)
  


    
  
  
  return (
  <div className={BussinessLinksStyle.mainDiv}>
  {
    sectionBtn &&
    <div className={BussinessLinksStyle.sectionLinkDiv}>
    <h3 className={BussinessLinksStyle.sectionLinkHeader}>1.Sizin biznes istiqamətiniz?</h3>
    <div className={BussinessLinksStyle.sectionLinkContainer}>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
        
      className={BussinessLinksStyle.link_btn}>
      Daşınmaz Əmlak
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Enerji
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Maliyyə Servisləri
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Sənaye Məhsulları
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Texnologiya, Media və Əyləncə
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Transporstasiya  və Logistika
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      İstehsal
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Retail
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Təchizat
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Təhsil
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      FMCG
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Tikinti
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      E-commerce
      </button>
    </div>
  </div>
  }
    
  {
      serviceBtn &&

      <div className={BussinessLinksStyle.serviceLinkDiv}>
    <h3 className={BussinessLinksStyle.sectionLinkHeader}>2.Sizin biznes ehtiyacınız?</h3>
    <div className={BussinessLinksStyle.sectionLinkContainer}>

      {servicesData
      .filter((a) => a.name === 'Konsaltinq Xidmətləri')
      .map((b)=>
        
        b.subcategory.map((c)=>
          (
            <BussinesLink_btn key={c.id} text={c.name} link={`haqqimizda/xidmetler/${c.id}`}/>
          ))
          
        )
      }
      {/* <Link_btn text={'Bazar Araşdırması'} link={'xidmetler/bazarArashdirmasi'}/>
      <Link_btn text={'Biznes Plan və TİƏ'} link={'xidmetler/biznesplan'}/>
      <Link_btn text={'Kapitallaşma'} link={'xidmetler/kapitallashma'}/>
      <Link_btn text={'Satış və Marketinq'} link={'xidmetler/satishMarketing'}/>
      <Link_btn text={'Strategiya və Maliyyə'} link={'xidmetler/strategiya-maliyye'}/>
      <Link_btn text={'Təşkilati'} link={'xidmetler/teshkilati'}/> */}
      
    </div>
    <button
    onClick={()=>{
      setOpenServiceBtn((prev)=>!prev)
      setOpenSectionBtn((prev)=>!prev)
    }}
    className={BussinessLinksStyle.backBtn}>
      <Image
    className={BussinessLinksStyle.backArrow}
    alt='Go back'
    src={BackArrow}/>
    </button>
  
  </div>
    }
  </div>
  )
}

export default BussinessLinks
