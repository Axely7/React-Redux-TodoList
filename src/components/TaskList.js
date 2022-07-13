import React from 'react'
import {useSelector} from 'react-redux'

const TaskList = () => {

  const tasks = useSelector( state => state.tasks )
  console.log(tasks)

  const handleDelete = (id) => {
    console.log(id)
  }

  return (
    <div>
      { tasks.map( task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{ task.description }</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ) ) }
    </div>
  )
}

export default TaskList