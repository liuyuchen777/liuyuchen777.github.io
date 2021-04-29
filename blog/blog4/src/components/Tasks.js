/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-28 00:05:58
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-28 00:59:46
 * @Description: 
 * @FilePath: /TS_playground/my-app/src/components/Tasks.js
 * @GitHub: https://github.com/liuyuchen777
 */
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
