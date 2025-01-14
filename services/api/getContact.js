


export default async function getContact(){
  const res = await fetch ("https://twc.efgroup.az/contact_data", { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}