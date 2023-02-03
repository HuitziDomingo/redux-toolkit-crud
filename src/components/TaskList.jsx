import { useSelector } from 'react-redux'

const TaskList = () => {

  const tasks = useSelector(state => state.tasks)


  return (
    <div>
      {
        tasks.map(task => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{JSON.stringify(task.completed)}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList