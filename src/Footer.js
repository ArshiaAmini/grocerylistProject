import React from 'react'

const Footer = () => {

  const displayDate = () => {
    const now = new Date();
    const today = now.getDate();
    const month = now.getMonth() +1;
    const year = now.getFullYear();

    const currentDate = month + "/" + today + "/" + year;
    return currentDate;

    
  }
  


  return (
    <div className='footer'> Date : { displayDate()}</div>
  )
}

export default Footer