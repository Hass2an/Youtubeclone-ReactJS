import React from 'react'

const Button = (props) => {
  return (
    <button className='px-5 m-2 bg-gray-400 rounded-full'>{props.name}</button>
  )
}

export default Button