


export default async function getVacancies(){
  const res = await fetch ("https://twc.efgroup.az/vacancies", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}