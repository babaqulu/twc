


export default async function getEvent(eventId){
  const res = await fetch 
  (`https://twc.efgroup.az/event/${eventId}`, { next: { revalidate: 5 } })

  if (!res.ok) {
    const errorBody = await res.text(); // Capture error details
    console.error('Error response body:', errorBody);
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }
  return res.json()

} 