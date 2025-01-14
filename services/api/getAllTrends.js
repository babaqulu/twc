

export default async function getAllTrends(){
  const res = await fetch ("https://twc.efgroup.az/trends", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}