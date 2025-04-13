


export default async function getFaq(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const response = await fetch (`https://twc.efgroup.az${prefix}/faq`, { next: { revalidate: 50 } })
  return response.json()

}