import {useContext} from 'react';
import Empty from '../components/Empty/Empty';
import CompletedTaskItem from '../components/CompletedTaskItem/CompletedTaskItem';
import Btn from '../components/Btn/Btn';
import TodoContext from '../components/Context';

import styles from './Tasks.module.scss';
import { Link } from 'react-router-dom';


const {pageHeader} = styles;
const CompletedTasks = ({tasks, tasksClass, createNewTask, taskToComplete, buttonsStyle}) => {
    const {sortAndFilterArray} = useContext(TodoContext);
    const completedTasks = sortAndFilterArray(tasks);

    return (
        <>
            <div className={pageHeader}>
                <Link to={'/'}>
                    <Btn color={'green'} text={'Назад'}/>
                </Link>
                <h1>Выполненные задачи</h1>
            </div>
            <div className={tasksClass}>
                {tasks.length === 0 ? 
                    <Empty text={'Вы еще не выполнили ни одной задачи'}/> 
                    : 
                    completedTasks
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