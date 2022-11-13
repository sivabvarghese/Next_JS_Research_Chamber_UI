import '../styles/globals.css'
import '../styles/Nav.module.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import type { AppProps } from 'next/app'
import Navbar from './components/navbar/NavBarComponent'
import Script from 'next/script';
import Head from 'next/head';
import SocialMediaSectionComponent from './components/FooterComponents/SocialMediaSectionComponent'



export default function App({ Component, pageProps }: AppProps) {
  return (
  <>


  <Navbar />
  <Component {...pageProps} />
  <SocialMediaSectionComponent />
  </>
  )
}
