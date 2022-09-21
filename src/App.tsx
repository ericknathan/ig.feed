import { Header, Post, Sidebar } from './components';

import styles from './app.module.css';
import './global.css';
import { PostModel } from './models';

const posts: PostModel[] = [
  {
    id: 1,
    publishedAt: new Date('2022-09-20 07:00:00'),
    author: {
      name: "Diego Fernandes",
      avatarUrl: "https://github.com/diego3g.png",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'https://jane.design/doctorcare' },
      { type: 'hashtags', content: [
        'novoprojeto',
        'nlw',
        'rocketseat'
      ] },
    ]
  },
  {
    id: 2,
    publishedAt: new Date('2022-09-20 08:00:00'),
    author: {
      name: "Mayk Brito",
      avatarUrl: "https://github.com/maykbrito.png",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback 👇' },
      { type: 'link', content: 'https://devonlane.design' },
      { type: 'hashtags', content: [
        'uiux',
        'userexperience'
      ] },
    ]
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                post={post}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}