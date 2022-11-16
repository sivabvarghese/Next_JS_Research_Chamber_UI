import { integerPropType } from '@mui/utils'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SocialMediaSectionComponent from './components/FooterComponents/SocialMediaSectionComponent'



type ToDos = {
  userid: number,
  id: number,
  title:string,
  completed:boolean
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: ToDos[] = await res.json();

  return {
    props: {
      todos,
    },
  }
}


/*export async function getServerSideProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  //const res = [1,2,3,4,5];
  //const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
  
}*/


export default function Home({todos}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
 console.log(typeof {todos});
 console.log(Object.keys({todos}));
 console.log(typeof todos);
  return (
    <div>
       <div className="header-background-overlay">
    <div className = "header-background-overlay shadow-2xl bg-hero-pattern bg-no-repeat bg-cover hover:bg-blend-darken sm:bg-right-top flex items-stretch min-h-screen flex-col">
   <p className = "text-white text-fivexl font-poppins font-bold  hover:text-green animate-pulse mt-4 hover:translate-y-12 w-80">Home Page</p>
   <p className="text-black text-threexl font-poppins font-italic hover:text-red animate-bounce">Static Site Generation Demo</p>
   {todos?.length === 0 ? (
      <div>Loading....</div>
    ) : (
      todos?.map(todo => (
        <div key={todo.id}>
          <p>{todo.id}: {todo.title}</p>
        </div>
      ) )
    )}
   <div>
 
   </div>
   </div>
   

</div>


    </div>
  )
}
