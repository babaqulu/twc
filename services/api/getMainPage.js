export default async function getMainPage(){
  const res = await fetch ("https://twc.efgroup.az/new_slider", { next: { revalidate: 500 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}