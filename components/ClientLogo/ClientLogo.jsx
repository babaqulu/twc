import Image from 'next/image'


function ClientLogo({logo,logoContainer, logoClass}) {
  return (
    <div className={logoContainer}>
      <Image
      width={100}
      height={100}
      className={logoClass}
      src={logo}
      alt="Client logo"/>
    </div>
  )
}

export default ClientLogo
