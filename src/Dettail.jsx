import React from 'react'

function Dettail({ fatherName,name,address,age}) {
  return (
    <div>
        <h1>My name is {name} saru.</h1>
        <p>i live in {address}.                       
         i am {age} year old. my father name is {fatherName}.</p>

    </div>
  )
}

export default Dettail