


export default async function getCarrierPage(){
  const res = await fetch ("https://twc.efgroup.az/new_carrer", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}