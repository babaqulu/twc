


export default async function getContact(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch (`https://twc.efgroup.az${prefix}/contact_data`, { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}