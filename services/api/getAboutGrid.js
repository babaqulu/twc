
export default async function getAboutGrid(){
  const res = await fetch ("https://twc.efgroup.az/value_care_intelligence", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}