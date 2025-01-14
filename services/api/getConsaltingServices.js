

export default async function getConsaltingServices(){
  const res = await fetch ('https://twc.efgroup.az/categories', {next: {revalidate: 5}})

  if (!res.ok) throw new Error ('Failed to fetch data')
  
  return res.json()
}
