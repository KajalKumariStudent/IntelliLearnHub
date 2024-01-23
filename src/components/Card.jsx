import React from 'react'

function Card({username,details,btnText="visit me", image="https://bcassetcdn.com/social/zy0pebbehf/preview.png"}) {
    
  
    const users = JSON.parse(localStorage.getItem('usersList'))
   

  return (
    <div className="relative h-[400px] w-[300px] rounded-lg border-black border-2 m-12 p-4 ">
  <img
    src={image}
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Hello I am an AI user. Know more about me 
    </p>
    <button onClick={details} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } →
    </button>
  </div>
</div>
  )
}

export default Card