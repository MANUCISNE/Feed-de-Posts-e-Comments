import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import sytles from './SideBar.module.css';

export function Sidebar() {
  return (
    <aside className={sytles.sidebar}>
      <img 
      className={sytles.cover} 
      src='https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50' />

      <div className={sytles.profile}>
        <Avatar src='https://avatars.githubusercontent.com/u/117774887?v=4'/>
        <strong>Emanuela Cisne</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}