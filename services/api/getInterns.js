export default async function getInterns(){
  const res = await fetch ("https://twc.efgroup.az/carrer_images", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}