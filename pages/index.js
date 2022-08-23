import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint eveniet provident id nisi architecto culpa officiis iusto ipsum optio amet maxime accusamus vero veritatis cupiditate non aliquam corrupti nihil saepe, illum odit. Sed, quam ad? Doloribus quod ullam consectetur, assumenda vero aliquid sapiente, earum ea, ex omnis quo asperiores quidem iure. Repudiandae fugiat temporibus dolorem reiciendis error maxime dolor!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod nam quo est laboriosam ipsa, repellat quis distinctio alias dolore veniam nostrum ab quas illum culpa sit molestias maiores ipsam cumque? Nesciunt itaque deserunt earum id praesentium. Repellat maiores quas, porro delectus placeat laboriosam adipisci odit quos explicabo velit perspiciatis iste iusto hic nisi beatae excepturi asperiores nihil sint et!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
    
  )
}
