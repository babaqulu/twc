export default function Home({ params }) {
  const locale = params?.locale || 'az';
  console.log("Locale:", locale);
  return (
    <main>
      <h1>{locale === 'az' ? "Salam Azərbaycan!" : "Hello English!"}</h1>
    </main>
  );
}