
import Image from 'next/image'
import trendsStyle from './trendsStyle.module.scss'

import TrendsHero from '../../public/img/trendsHero.png'
import MainMore_btn from '../Buttons/MainMore_btn/MainMore_btn'


export default function trends() {
  return (
    <div className={trendsStyle.trendsContainer}>
      <Image
      width={721}
      height={640}
      className={trendsStyle.trendsHero}
      src={TrendsHero}/>
      <div className={trendsStyle.trendsDesc}>
        <h3 className={trendsStyle.headline}>Trendlər</h3>
        <p className={trendsStyle.desc}>Qlobal konsaltinq sənayesində 2024-cü ilin trendləri 
        Konsaltinq sənayesi daim inkişaf edir, bu da mütəxəssislərin ən son tendensiyalar və inkişaflardan xəbərdar olmasını vacib edir.</p>

        <MainMore_btn link={'trends'}/>
      </div>
    </div>
  )
}


