


export default async function getService(serviceId){
  const res = await fetch (`https://twc.efgroup.az/business/${serviceId}`, { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

} 