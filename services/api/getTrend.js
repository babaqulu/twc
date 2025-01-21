


export default async function getTrend(trendId){
  const res = await fetch (`https://twc.efgroup.az/trend/${trendId}`, { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

} 