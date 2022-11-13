import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SocialMediaSectionComponent from './components/FooterComponents/SocialMediaSectionComponent'

export default function Home() {
  return (
    <div>
       <div className="header-background-overlay">
    <div className = "header-background-overlay shadow-2xl bg-hero-pattern bg-no-repeat bg-cover hover:bg-blend-darken sm:bg-right-top flex items-stretch min-h-screen flex-col">
   <p className = "text-white text-fivexl font-poppins font-bold  hover:text-green animate-pulse mt-4 hover:translate-y-12 w-80">Home Page</p>
   <div></div>
   </div>
    
</div>


    </div>
  )
}
