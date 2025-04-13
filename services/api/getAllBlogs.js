


export default async function getAllBlogs(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch (`https://twc.efgroup.az${prefix}/blogs`, { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}