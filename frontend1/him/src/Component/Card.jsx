import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div id="him">
      <img src="https://www.shutterstock.com/image-vector/vector-cute-baby-panda-cartoon-600nw-2427356853.jpg" alt="" height={100} width={100} />
      <h1> {props.name} </h1>
      <h3> {props.edu}</h3>      
    </div>
  )
}

export default Card
