
import Image from 'next/image'
import trendsStyle from './trendsStyle.module.scss'

import TrendsHero from '../../public/img/trendsHero.png'
import MainMore_btn from '../Buttons/MainMore_btn/MainMore_btn'


export default function trends(locale) {

  return (
    <div className={trendsStyle.trendsContainer}>
      <Image
      width={721}
      height={640}
      className={trendsStyle.trendsHero}
      src={TrendsHero}/>
      <div className={trendsStyle.trendsDesc}>
        <h3 className={trendsStyle.headline}>{locale === 'az' ? "Trendlər" : "Trends"}</h3>
        <p className={trendsStyle.desc}>{
          locale === 'az' ? 
          "Qlobal konsaltinq sənayesində 2024-cü ilin trendləri Konsaltinq sənayesi daim inkişaf edir, bu da mütəxəssislərin ən son tendensiyalar və inkişaflardan xəbərdar olmasını vacib edir." :'Trends in the Global Consulting Industry for 2024 The consulting industry is constantly evolving, making it important for a plan to stay abreast of the latest trends and developments.'}</p>

        <MainMore_btn locale = {locale} link={'trends'}/>
      </div>
    </div>
  )
}


