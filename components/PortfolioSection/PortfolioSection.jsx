

import PortfolioSectionStyle from './PortfolioSectionStyle.module.scss'



async function PortfolioSection() {

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
