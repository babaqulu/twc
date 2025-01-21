
export default async function getClientsPage(){
  const res = await fetch ("https://twc.efgroup.az/client-text", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}