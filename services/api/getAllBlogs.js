


export default async function getAllBlogs(){
  const res = await fetch ("https://twc.efgroup.az/blogs", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}