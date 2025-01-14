export default async function getMainProjects(){
  const res = await fetch ("https://twc.efgroup.az/main_project", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}