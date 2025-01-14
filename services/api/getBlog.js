


export default async function getBlog(blogId){
  const res = await fetch (`https://twc.efgroup.az/blog/${blogId}`, { next: { revalidate: 50 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

} 