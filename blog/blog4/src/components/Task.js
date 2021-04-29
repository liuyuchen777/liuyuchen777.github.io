/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-28 00:35:40
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-28 01:02:46
 * @Description: 
 * @FilePath: /TS_playground/my-app/src/components/Task.js
 * @GitHub: https://github.com/liuyuchen777
 */

import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ?
            'reminder' : ''}`} 
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text} 
                <FaTimes style={{color: 'red', cursor: 'pointer'}} 
                onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
