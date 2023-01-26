import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export default function App() {
 

  return (
    <div className="App">
   <Msg name="Gopi"
   pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRQ-xvoO5LW2ClJRlQ5CC8wmzppKSjMV-PdCdFrisLO4bmY_zn39DVDXav4XPDXt_P4Y&usqp=CAU"/>
   <Msg name="Abi"
   pic="https://i.pinimg.com/550x/ae/ab/63/aeab636b233a5d76306bf2e9b6fcf282.jpg"/>
   <Msg name="Bharathy"
  pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1MxvJncPXEnfOM8isrSt0RRojekQnqo9CQ&usqp=CAU"/>
   </div>
  );
}
function Msg(props){
  
  return(
    <div>
      <img className="user-pic" src={props.pic} alt="user-pic"/>
<h1>
    Hello,<span className="user-name">{props.name}</span> 🌸💐🌼🌻🌺🤩
   </h1>
   
   </div>

  )
}

