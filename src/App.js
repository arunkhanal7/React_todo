import React from 'react'
import Todo from './Todo'

const App = () => {
  const today = new Date();
  const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const day= today.getDay();
const currentDate = month + "/" + date + "/" + year;
  return (
    <>
    <div className='main'>
      <div className='todobody'>
        <div>
          {currentDate} {"    "} {day}

        </div>
      <Todo />

      </div>
      

    </div>
    </>
  )
}

export default App