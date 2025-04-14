

import VacancyForm from '../VacancyForm/VacancyForm'
import VacancyStyle from './VacancyCompStyle.module.scss'


function Vacancy({lang, vacancyHeader, jobAboutText}) {
  return (
    <div className={VacancyStyle.vacancy}>
      <h3 className={VacancyStyle.vacancyMainHeader}>{vacancyHeader}</h3>
      <div className={VacancyStyle.jobInfo}>

        <p className={VacancyStyle.vacancyHeaders && VacancyStyle.who}>
        {lang === 'az' ? "Biz kimik?" : "Who are we?"}
          <span className={VacancyStyle.whoText}>
          {lang === 'az' ? "Cənub-Şərqi Avropanın ilk erkən mərhələdə olan saf menecement konsaltinq şirkəti olan TWC gənc, dinamik və istedadlı komandası ilə hər çətinliyin üstəsindən gəlməyə hazırdır." : "TWC, the first early-stage pure management consulting company in Southeast Europe, is ready to overcome any challenge with its young, dynamic and talented team."}
          </span>
        </p>

        <div
        className={VacancyStyle.vacancyTexts}
        dangerouslySetInnerHTML={{ __html: jobAboutText }}
        ></div>

        <VacancyForm lang={lang}/>
      </div>
    </div>
  )
}

export default Vacancy
