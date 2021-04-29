/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-27 23:35:08
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-29 03:54:16
 * @Description:
 * @FilePath: /liuyuchen777.github.io/blog/blog4/src/App.js
 * @GitHub: https://github.com/liuyuchen777
 */

import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'
import './app.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(
    false
  )

  // const name = 'Brad'
  // const x = true
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: '2021/4/26',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: '2021/4/26',
        reminder: true,
    },
    {
        id: 3,
        text: "Do Homework",
        day: '2021/4/26',
        reminder: true,
    }
  ])
  
  // delete task
  const deleteTask = (id) => {
    console.log("delete", id)
    setTasks(tasks.filter((task) => task.id !== id))
  } 
  
  // toggleReminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
        !task.reminder } : task
      )
    )
  }

  // add task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    // single element
    <div className="container2">
      <Header onAdd={() => 
        setShowAddTask(!showAddTask)} showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 
      <p>no tasks to show</p>
      }
    </div>
    // <h2></h2>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
