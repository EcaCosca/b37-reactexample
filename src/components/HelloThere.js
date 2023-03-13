import React from 'react'

const HelloThere = ({name, lastname = "Jhonson"}) => {
    console.log(lastname)
  return (
    <div>Welcome {name} {lastname}!!</div>
  )
}

export default HelloThere