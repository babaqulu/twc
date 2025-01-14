export default async function getCategories(){
  const res = await fetch("https://twc.efgroup.az/categories", { next: { revalidate: 50 } })

  if(!res.ok) throw new Error

  return res.json
}