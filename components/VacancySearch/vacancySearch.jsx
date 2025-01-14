"use client"
import React, { useState } from 'react'
import VacancyCart from '../AboutVacancyCard/AboutVacancyCard';
import VacanySearchStyle from './vacancySearchStyle.module.scss'
import SearchIcon from '@/public/icons/search.png'
import Image from 'next/image';
import AboutVacancyCard from '../AboutVacancyCard/AboutVacancyCard';

export default function vacancySearch({vacanciesData}) {

  const [searchParam, SetSearchParams] = useState('') 

  const handleChange = e => SetSearchParams(e.target.value.toLowerCase())
  console.log(vacanciesData.map((vacancy)=>vacancy.title.toLowerCase()));
  
  
  return (
    <div className={VacanySearchStyle.main}>
      
      <div className={VacanySearchStyle.inputWrapper}>
      <label className={VacanySearchStyle.inputLabel} htmlFor="vsearch">Gələcək Karyeranı Konsaltİnqdə Başla</label>

      <div className={VacanySearchStyle.input}>
      <input className={VacanySearchStyle.searchInput} id='vsearch' onChange={handleChange} name='vsearch' placeholder='İş axtar'  type="text" />
      <Image
      className={VacanySearchStyle.submit}
      src={SearchIcon}
      width={1000}
      height={1000}/>
      </div>
      </div>
      {
        searchParam &&
      <div className={VacanySearchStyle.searchedVacancies}>
        {
        vacanciesData.filter((vacancy)=>vacancy.title.toLowerCase().includes(searchParam)).map((filteredVacancy)=>(
          <AboutVacancyCard key={filteredVacancy.id} link={`karyera/${filteredVacancy.id}`} vacancy={filteredVacancy.title} jobInfoTextAbout={filteredVacancy.text.slice(0,207) + '...'}/>
        ))
        }
      </div>}
    </div>

  )
}
