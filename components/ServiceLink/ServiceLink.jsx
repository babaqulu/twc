
import Link from 'next/link'


function ServiceLink({consaltingServicesData}) {  
  return (
    <>
    {
      consaltingServicesData[1].subcategory.map((service)=>(
                  <Link
          key={service.id}
          className="dropDownLink"
          href={`haqqimizda/xidmetler/${service.id}`}>{service.name}
          </Link>
      ))
    }
    </>
    
  )
}

export default ServiceLink
