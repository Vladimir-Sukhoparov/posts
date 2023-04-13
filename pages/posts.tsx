import Link from 'next/link'
import React from 'react'
import styles from '../styles/posts.module.scss'

const Posts = ({posts}) => {
  return (
    <div className={styles.post}>
        <ul>
            {posts.map(item=>
                <li key={item.id}>
                    <Link href={`posts/${item.id}`}>
                        {item.title}
                    </Link>
                    <p>{item.body}</p>
                </li>)}
        </ul>
    </div>
  )
}

export default Posts

export async function getStaticProps(content) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const posts = await response.json()
    return {
        props:{posts}
    }
}