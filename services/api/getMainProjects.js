export default async function getMainProjects(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch (`https://twc.efgroup.az${prefix}/main_project`, { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}