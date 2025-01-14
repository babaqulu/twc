

export default async function getPartners(){
  const res = await fetch ("https://twc.efgroup.az/partners", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}