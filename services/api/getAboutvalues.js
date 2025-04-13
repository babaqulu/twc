

export default async function getAboutvalues(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch(`https://twc.efgroup.az${prefix}/blogs`, { next: { revalidate: 50 } })

  if(!res.ok) throw new Error

  return res.json
}