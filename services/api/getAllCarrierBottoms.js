

export default async function getAllCarrierBottoms(){
  const res = await fetch ("https://twc.efgroup.az/carrer_bottom", { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}