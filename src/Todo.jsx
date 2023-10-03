import React, { useState } from 'react';

const Todo = () => {
  const [activity, setActivity] = useState('');
  const [listdata, setListdata] = useState([]);
  const [showInput, setShowInput] = useState(false);

  function addActivity() {
      setListdata([...listdata, activity]);
      setActivity('');
    
  }

  return (
    <>
      <div>
        {showInput ? (
          <div>
            <input
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="Add a new task"
            />
            <button onClick={addActivity}>Add Task</button>
          </div>
        ) : (
          <button onClick={() => setShowInput(true)}>+</button>
        )}
      </div>
      <ul>
        {listdata.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
