"use client"
import React, { useState } from 'react'


import BussinessLinksStyle from './BussinessLinksStyle.module.scss'
import BussinesLink_btn from "@/components/Buttons/BussinesLink_btn/BussinesLinkBtn"
import Image from 'next/image'

import BackArrow from '../../public/icons/longRightDark.png'



  function BussinessLinks({servicesData, locale}) {
  const [serviceBtn, setOpenServiceBtn] = useState(false)
  const [sectionBtn, setOpenSectionBtn] = useState(true)
  
  return (
  <div className={BussinessLinksStyle.mainDiv}>
  {
    sectionBtn &&
    <div className={BussinessLinksStyle.sectionLinkDiv}>
    <h3 className={BussinessLinksStyle.sectionLinkHeader}>{locale === 'az' ? "1.Sizin biznes istiqamətiniz?" : "1.What is your business direction?"}</h3>
    <div className={BussinessLinksStyle.sectionLinkContainer}>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
        
      className={BussinessLinksStyle.link_btn}>
        {locale === 'az' ? "Daşınmaz Əmlak" : "Real Estate"}
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      Enerji
      {locale === 'az' ? "Enerji" : "Energy"}
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
        {locale === 'az' ? "Maliyyə Servisləri" : "Financial Services"}
    
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      
      {locale === 'az' ? "Sənaye Məhsulları" : "Industrial Products"}
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
        {locale === 'az' ? "Texnologiya, Media və Əyləncə" : "Technology, Media and Entertainment"}
      
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      
      {locale === 'az' ? "Transporstasiya  və Logistika" : "Transportation and Logistics"}
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      
      {locale === 'az' ? "İstehsal" : "Production"}
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
        {locale === 'az' ? "Retail" : "Retail"}
      
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      {locale === 'az' ? "Təchizat" : "Supply"}
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      {locale === 'az' ? "Təhsil" : "Education"}
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      {locale === 'az' ? "FMCG" : "FMCG"}
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      {locale === 'az' ? "Tikinti" : "Construction"}
      </button>
      <button 
      onClick={()=>{
        setOpenServiceBtn((prev)=>!prev)
        setOpenSectionBtn((prev)=>!prev)
      }
        }
      className={BussinessLinksStyle.link_btn}>
      {locale === 'az' ? "E-commerce" : "E-commerce"}
      </button>
    </div>
  </div>
  }
    
  {
      serviceBtn &&

      <div className={BussinessLinksStyle.serviceLinkDiv}>
    <h3 className={BussinessLinksStyle.sectionLinkHeader}>{locale === 'az' ? "2.Sizin biznes ehtiyacınız?" : "2.What is your business need?"}</h3>
    <div className={BussinessLinksStyle.sectionLinkContainer}>

      {locale === 'az' ?

      servicesData
      .filter((a) => a.name === 'Konsaltinq xidmətləri'
       )
      .map((b)=>
        
        b.subcategory.map((c)=>
          (
            <BussinesLink_btn key={c.id} text={c.name} link={`haqqimizda/xidmetler/${c.id}`}/>
          ))
          
        )
       : 
        servicesData
          .filter((a) => a.name === 'Consulting Services'
           )
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
