

export default async function getDoingBussiness(){
  const res = await fetch ("https://twc.efgroup.az/doing_business", { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()
}