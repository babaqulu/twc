

export default async function getConsaltingServices(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch (`https://twc.efgroup.az${prefix}/categories`, {next: {revalidate: 5}})

  if (!res.ok) throw new Error ('Failed to fetch data')
  
  return res.json()
}
