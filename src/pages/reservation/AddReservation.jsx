import React from 'react'

const AddReservation = () => {
  const techId = window.location.pathname.split("/")[2];
  console.log(techId);
  return (
    <div>
      <form >
        <input
         type="text"
         placeholder="location"
         />
        <input type="date" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddReservation