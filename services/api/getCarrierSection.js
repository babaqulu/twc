


export default async function getCarrierSection(){
  const res = await fetch ("https://twc.efgroup.az/carrer_page", { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}