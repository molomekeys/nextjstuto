import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Salut Bro</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio corporis quas eum sunt culpa alias autem temporibus, voluptatem, doloribus consectetur asperiores optio. Debitis, culpa nam cum architecto fuga commodi!
        Sapiente deserunt corrupti voluptatum, inventore officiis quod excepturi eos repudiandae dolore pariatur at nulla! Dolores nisi reprehenderit aliquid rem tenetur optio repudiandae quae rerum maxime, dignissimos quaerat quo! Placeat, atque.
        Et animi asperiores eaque necessitatibus repudiandae officia, ex reiciendis quas perspiciatis sapiente dolor ad! Nisi in architecto reprehenderit. Explicabo labore aliquid reiciendis recusandae voluptatum nam commodi, quibusdam modi vero ipsum.
      </p>
      <Link href='/about'>Click </Link>
      <div>
        <p>Lorem ipsum do
          lor sit amet consectetur, adipisicing elit. Enim expedita et maiores quidem veniam officia, iste dolorum ipsa numquam, explicabo ad, perferendis nesciunt doloremque eaque sunt adipisci laboriosam voluptat
          em. Sequi?</p>
        <Link href="/faq">Go to the FAQ</Link>
      </div>
    </div>
  )
}
