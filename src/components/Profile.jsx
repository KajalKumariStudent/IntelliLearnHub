import React from 'react'

function Profile({user, email}) {
  const profileInfo = JSON.parse(localStorage.getItem("usersList"))
 const details = profileInfo.map((perInfo) =>  perInfo===user || email===profileInfo.email ? user : "")
  return (
    <div className='bg-blue-400 text-white text-lg '>
      {details}
    </div>
  )
}

export default Profile
