export default async function getWorkers(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const response = await fetch (`https://twc.efgroup.az${prefix}/our_team`, { next: { revalidate: 5 } })
  return response.json()
}