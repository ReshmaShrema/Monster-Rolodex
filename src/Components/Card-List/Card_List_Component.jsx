import React from 'react';
import './Card_List.Style.css';
import { Card } from '../Card/Card.Component';

export const CardList = (props) =>(
<div className='card-list'>
  {props.monsters.map(monster => (
    <Card key = {monster.id} monster= {monster}/>
  ))}  
  </div>
)




// import React from 'react'

// const Card_List_Component = () => {
//   return (
//     <div>Card_List_Component</div>
//   )
// }

// export default Card_List_Component