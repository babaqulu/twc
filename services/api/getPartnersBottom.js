

export default async function getPartnersBottom(){
  const res = await fetch ("https://twc.efgroup.az/partner-bottom", { next : { revalidate:50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()
}