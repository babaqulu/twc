export default async function getCarrierBottom(bottomId, locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch (`https://twc.efgroup.az${prefix}/carrar_bottom_detail/${bottomId}`, { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

} 