
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import "../styles/global.css";
import {Poppins} from "next/font/google"



import Footer from '../components/Footer/Footer'


export const metadata = {
  
  title: "TWC - Professional business services",
  description: "The first local pure management consulting services in Azerbaijan",
};

const poppins = Poppins({
  subsets:['latin-ext'],
  weight: ['300','400','500','600','700']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      
      <body>
      <AppRouterCacheProvider  options={{ enableCssLayer: true }}>
        {children}
        <Footer/>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
