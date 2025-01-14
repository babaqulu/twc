

export default async function getOurValues(){
  const res = await fetch("https://twc.efgroup.az/our_values", { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()
}