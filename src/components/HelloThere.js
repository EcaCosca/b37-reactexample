import React from 'react'

const HelloThere = ({name, lastname}) => {
    console.log(lastname)
  return (
    <div>Welcome {name} {lastname}!!</div>
  )
}

export default HelloThere