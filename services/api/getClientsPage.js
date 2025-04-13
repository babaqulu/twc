
export default async function getClientsPage(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch (`https://twc.efgroup.az${prefix}/client-text`, { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}