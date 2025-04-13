

export default async function getPrivacy(locale){
  const prefix = locale === 'en' ? '/en' : '';
  const response = await fetch (`https://twc.efgroup.az${prefix}/privacy`, { next: { revalidate: 50 } })
  return response.json()

}