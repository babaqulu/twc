

export default async function getAboutvalues(){
  const res = await fetch("https://twc.efgroup.az/blogs", { next: { revalidate: 50 } })

  if(!res.ok) throw new Error

  return res.json
}