

export default async function getOurValues(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch(`https://twc.efgroup.az${prefix}/our_values`, { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()
}