import React from 'react';
import Empty from '../../components/Empty/Empty';
import CompletedTaskItem from '../../components/CompletedTaskItem/CompletedTaskItem';
import Btn from '../../components/Btn/Btn';

import styles from './CompletedTasks.module.scss';

const {pageHeader} = styles;
const CompletedTasks = ({tasks, tasksClass, createNewTask, taskToComplete, buttonsStyle}) => {
    return (
        <>
            <div className={pageHeader}>
                <Btn color={'green'} text={'Назад'} />
                <h1>Выполненные задачи</h1>
            </div>
            <div className={tasksClass}>
                {tasks.length === 0 ? 
                    <Empty text={'Вы еще не выполнили ни одной задачи'}/> 
                    : 
                    tasks.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
                    .map((task, index) => 
                        <CompletedTaskItem 
                            id={index + 1} 
                            name={task.name} 
                            key={task.id}
                            createNewTask={createNewTask}
                            taskToComplete={taskToComplete}
                        />
                    )
                }
            </div>
        </>
    );
};

export default CompletedTasks;