export default async function getAllEvents(){
  const res = await fetch ("https://twc.efgroup.az/new_events", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}