


export default async function getService(serviceId, locale){
  const prefix = (locale && locale === 'en') ? '/en' : '';
  const res = await fetch (`https://twc.efgroup.az${prefix}/business/${serviceId}`, { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

} 