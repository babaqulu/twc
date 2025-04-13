

export default async function getDoingBussiness(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch (`https://twc.efgroup.az${prefix}/doing_business`, { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()
}