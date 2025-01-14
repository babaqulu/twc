export default async function getWorkers(){
  const response = await fetch ("https://twc.efgroup.az/our_team", { next: { revalidate: 5 } })
  return response.json()
}