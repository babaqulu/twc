


export default async function getFaq(){
  const response = await fetch ("https://twc.efgroup.az/faq", { next: { revalidate: 50 } })
  return response.json()

}