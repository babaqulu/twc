


export default async function getPartnersPage(){
  const res = await fetch ("https://twc.efgroup.az/partner_page", { next: { revalidate: 5 } })

  if(!res.ok) throw new Error ('Failed to fetch data')

  return res.json()

}