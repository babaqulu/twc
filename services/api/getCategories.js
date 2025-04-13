export default async function getCategories(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch(`https://twc.efgroup.az${prefix}/categories`, { next: { revalidate: 50 } })

  if(!res.ok) throw new Error

  return res.json
}