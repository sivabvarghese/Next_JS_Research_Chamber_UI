import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'


type ToDos = {
  userid: number,
  id: number,
  title:string,
  completed:boolean
}


export const getServerSideProps = async () =>  {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: ToDos[] = await res.json();

  return {
    props: {
      todos,
    },
  }
}


export default function About( {todos} : InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  console.log(typeof {todos});
  console.log(Object.keys({todos}));
  console.log(typeof todos);
  return (
    <div className= "bg-blue-900">
      <h1 className="font-sans text-3xl font-bold underline">
      <p className="text-white text-fivexl font-poppins font-italic hover:text-red">About Page</p>
      <p className="text-black text-threexl font-poppins font-italic hover:text-red animate-bounce">Server Side Generation Demo</p>
    </h1>
    {todos?.length === 0 ? (
      <div>Loading....</div>
    ) : (
      todos?.map(todo => (
        <div key={todo.id}>
          <p>{todo.id}: {todo.title}</p>
        </div>
      ) )
    )}
    </div>
  )
}