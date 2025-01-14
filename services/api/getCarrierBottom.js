export default async function getCarrierBottom(bottomId){
  const res = await fetch (`https://twc.efgroup.az/carrar_bottom_detail/${bottomId}`, { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

} 