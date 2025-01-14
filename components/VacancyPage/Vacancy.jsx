

import VacancyForm from '../VacancyForm/VacancyForm'
import VacancyStyle from './VacancyCompStyle.module.scss'


function Vacancy({vacancyHeader, jobAboutText}) {
  return (
    <div className={VacancyStyle.vacancy}>
      <h3 className={VacancyStyle.vacancyMainHeader}>{vacancyHeader}</h3>
      <div className={VacancyStyle.jobInfo}>

        <p className={VacancyStyle.vacancyHeaders && VacancyStyle.who}>
        Biz kimik?
          <span className={VacancyStyle.whoText}>
          Cənub-Şərqi Avropanın ilk erkən mərhələdə olan saf menecement konsaltinq şirkəti olan TWC gənc, dinamik və istedadlı komandası ilə hər çətinliyin üstəsindən gəlməyə hazırdır.
          </span>
        </p>

        <div
        className={VacancyStyle.vacancyTexts}
        dangerouslySetInnerHTML={{ __html: jobAboutText }}
        ></div>

        <VacancyForm/>
      </div>
    </div>
  )
}

export default Vacancy
