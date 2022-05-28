import React from 'react';
import TaskItem from './TaskItem/TasksItem';

import styles from './TasksList.module.scss';

const {tasks} = styles;

const TasksList = ({tasksArr, setNewTask}) => {
    return (
        <div className={tasks}>
            {
                tasksArr.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
                .map(task => 
                    <TaskItem 
                        id={task.id} 
                        name={task.name} 
                        key={task.id}
                        setNewTask={setNewTask}
                    />
                )
            }
        </div>
    );
};

export default TasksList;