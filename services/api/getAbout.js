export default async function getAbout(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch (`https://twc.efgroup.az${prefix}/new_about`, { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}