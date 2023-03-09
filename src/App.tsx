import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/SideBar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/117774887?v=4',
      name: 'Emanuela Cisne',
      role: 'Frontend DD Solutions - Design e Desenvolvimento'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maybrito.png',
      name: 'Samantha Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-10 20:00:00')
  },
];

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        
        <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>

      </div>
    </div>
    
  )
}

