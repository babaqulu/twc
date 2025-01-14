export default async function getAbout(){
  const res = await fetch ("https://twc.efgroup.az/new_about", { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}