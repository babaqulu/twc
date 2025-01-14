

export default async function getPrivacy(){
  const response = await fetch ("https://twc.efgroup.az/privacy", { next: { revalidate: 50 } })
  return response.json()

}