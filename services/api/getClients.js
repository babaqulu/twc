

export default async function getClients(){
  const res = await fetch ("https://twc.efgroup.az/clients", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}