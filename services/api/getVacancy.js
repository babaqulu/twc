


export default async function getVacancy(vacancyId){
  const res = await fetch (`https://twc.efgroup.az/vacancy/${vacancyId}`, { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

} 