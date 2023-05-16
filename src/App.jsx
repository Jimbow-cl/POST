import { useState } from 'react'
import './App.css'
import Post from './post'

function App() {

  const [rocket, setRocket] = useState([
    { title: "My rocket", content: "Look, I built a new rocket", author: "Elon Musk", likes: 0 },
    { title: "My poney", content: "Look, I ride a new poney", author: "Elon Pusk", likes: 0 },
    { title: "My  money", content: "Look, I win a new money", author: "Elton Rusk", likes: 0 },
    { title: "My rolex", content: "Look, I buy a new rolex", author: "Elpon Kusk", likes: 0 },])



  function likePlus(i) {

    rocket[i].likes = rocket[i].likes + 1;
    setRocket([...rocket]);
    console.log(rocket[i].likes);
  };


  const RenderMyArray = () => {
    return (
      rocket.map((item, index) => {
        return (
          <div>
            <Post key={index} title={item.title} content={item.content} author={item.author} likePlus={() => { likePlus(index) }} likes={item.likes} />
          </div>
        )
      })
    )
  }

  return (
    <div>
      {RenderMyArray()}
    </div >
  )
}

export default App







