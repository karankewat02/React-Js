import React from 'react'
import {Link} from 'react-router-dom'
import heroImg from './herobg.svg'
import Styles from './Home.module.css';

export default function Home() {
  return (
    <div className={Styles.heroSection}>

        <div className={Styles.content}>
            <h1>Gyan Ganga News</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia magni, velit eveniet laudantium est tenetur iure quia necessitatibus quaerat autem fugit praesentium dignissimos iste, aspernatur provident soluta sed voluptate.</p>
            <button><Link to={'/general'}>Explore</Link></button>
        </div>
        <div className={Styles.heroImg}>
            <img src={heroImg} alt="" />
        </div>

    </div>
  )
}
