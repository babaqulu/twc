
import Demirchi from '../../public/img/logos/demirchitower.png'
import Prestij from '../../public/img/logos/Prestijkimya.png'
import Absheron from '../../public/img/logos/absheronsherab.png'

import ClientLogo from '../ClientLogo/ClientLogo'

import PortfolioSectionStyle from './PortfolioSectionStyle.module.scss'

import getClients from '@/services/api/getClients'

async function PortfolioSection() {
  // const clients =  getClients()
  // const clientData = await clients
  return (
    <div className={PortfolioSectionStyle.projectsSection}>
      <h1 className={PortfolioSectionStyle.projectsSectionTittle}>Müştəri layihələrimiz</h1>
      {/* <div className={PortfolioSectionStyle.logos}>
        {
          clientData.map((client)=>{
            return (
            <ClientLogo logoClass={PortfolioSectionStyle.clientLogo} logoContainer={PortfolioSectionStyle.clientLogoContainer} key={client.id} logo={client.logo}/>
            )
          })
        }

      </div> */}
      <p className={PortfolioSectionStyle.projectsSectionNav}>Portfolio</p>
    </div>
  )
}

export default PortfolioSection
