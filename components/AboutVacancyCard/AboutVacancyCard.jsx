import AboutVacancyCardStyle from './AboutVacancyCardStyle.module.scss'

import ApplyBtn from '../Buttons/Apply_btn/applyBtn';

function AboutVacancyCard({vacancy, link, jobInfoTextAbout, locale}) {
  return (
    <div className={AboutVacancyCardStyle.cartContainer}>

      <h3 className={AboutVacancyCardStyle.vacancyName}>{vacancy}</h3>

      <div className={AboutVacancyCardStyle.containerB}>

        <div
        className={AboutVacancyCardStyle.aboutVacancyText}
        dangerouslySetInnerHTML={{ __html: jobInfoTextAbout }}
        ></div>

        <ApplyBtn locale={locale} link={link}/>
      </div>
      
    </div>
  )
}

export default AboutVacancyCard
