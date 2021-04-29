/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-28 01:03:38
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-29 04:09:51
 * @Description: 
 * @FilePath: /liuyuchen777.github.io/blog/blog4/src/components/AddTask.js
 * @GitHub: https://github.com/liuyuchen777
 */

import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("please add a task!")
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }
  
  return (
    <form className='add-form' onSubmit={onSubmit}> 
      <div className='form-control2'>
          <label>Task</label>
          <input type='text' placeholder='Add Task' 
          value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      
      <div className='form-control2'>
          <label>Day</label>
          <input type='text' placeholder='Add Day' 
          value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      
      <div className='form-control2 form-control-check'>
          <label>Set Reminder</label>
          <input type='checkbox'
          checked={reminder}
          value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
