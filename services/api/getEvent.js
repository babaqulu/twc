


export default async function getEvent(eventId,locale){
  const prefix = locale === 'en' ? '/en' : '';
  const res = await fetch 
  (`https://twc.efgroup.az${prefix}/event/${eventId}`, { next: { revalidate: 5 } })

  if (!res.ok) {
    const errorBody = await res.text(); // Capture error details

    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }
  return res.json()

} 