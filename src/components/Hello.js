import React from 'react'
import HelloThere from './HelloThere'

const Hello = () => {
    // document.querySelector(".classhere").addEventListener("click", ()=>{
    //     alert("Hello there")
    // })

    const handleClick = () => {
        alert("Hey, I am walking here")
    }

  return (
    <>
        <div>Hello!</div>
        <button onClick={()=>alert("hello there")}>inline</button>
        <button onClick={handleClick}>handle it!</button>
        <HelloThere name="Ammar" lastname="Mahmoud"/>
        <HelloThere name="Simon" />
        <HelloThere name="Alper" />
    </>
  )
}

export default Hello