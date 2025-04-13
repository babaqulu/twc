import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "../../styles/global.css";
import { Poppins } from "next/font/google";
import Footer from "../../components/Footer/Footer";

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700']
});

// ✅ Metadata default export-un üstündə export olunmalıdır
export const metadata = {
  title: "TWC - Professional business services",
  description: "The first local pure management consulting services in Azerbaijan",
};

export default function Layout({ children, params }) {
  const locale = params?.locale;

  return (
    <html lang="az" className={poppins.className}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {children}
          <Footer locale={locale} />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}