import React from 'react'
import Data from './news.json'
import Styles from './Admin.module.css'

export default function Admin() {
  return (
    <div className={Styles.admin}>
        <h1>Admin Dashboard</h1>

        <div className={Styles.addNews}>

          <h2>Add News</h2>
          <form action="">
              <input type="text" name="" id="" placeholder='Title'/><br />
              <input type="text" name="" id="" placeholder='Author'/><br />
              <input type="text" name="" id="" placeholder='Image Url'/><br />
              <textarea name="" id="" placeholder="News Description" cols="30" rows="10"></textarea> <br />
              
              <span>Category -</span>
              <label htmlFor="campus">Campus </label>
              <input type="radio" name="clg" id="campus" value="campus" />
              <label htmlFor="academics">Academics </label>
              <input type="radio" name="clg" id="academics" value="academics" />
              <label htmlFor="placements">Placements </label>
              <input type="radio" name="clg" id="placements" value="events" />
              <label htmlFor="placements">Events </label>
              <input type="radio" name="clg" id="events" value="events" /> <br />

              <button className="btn btn-primary">Add News</button>
          </form>
        
        </div>

        <div className={Styles.liveNews}>

          <h2>Currently Live News</h2>

          {Data.articles.map((element)=>{
            return <div className={Styles.newsELement}>
                <div >{element.title}</div>
                <button><i class="fa-solid fa-trash-can"></i></button>
                <button><i class="fa-solid fa-pen"></i></button>
            </div>           

          })}

        </div>

    </div>
  )
}
