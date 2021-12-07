import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const History = (props) => {

  if (props.allClicks.length === 0) {
    return (
      <p>Utilize los botones Left y Right para contar clicks</p>
    )
  }

  return (
    <>
      <h4>Historial de clicks</h4>
      { props.allClicks.join(' ') }
    </>
  )

}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  
  //const [clicks, setClicks] = useState(
  //  {
  //    left: 0,
  //    right: 0
  //  }
  //)

  // const handleLeftClick = () => setClicks( {...clicks, left: (clicks.left + 1)} )
  // const handleRightClick = () => setClicks( {...clicks, right: (clicks.right + 1) } )
  
  const handleLeftClick = () => {
    setLeft(left + 1)
    setAll(allClicks.concat('L'))
    debugger
  }

  const handleRightClick = () => {
    setRight(right + 1)
    setAll(allClicks.concat('R'))
  }

  return (
    <>
      {left}
      <Button onClick={handleLeftClick} text="Left"/>
      <Button onClick={handleRightClick} text="Right"/>
      {right}
      <History allClicks={allClicks}/>
      
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);