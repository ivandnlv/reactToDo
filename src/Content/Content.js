import React, {useState} from 'react';
import Btn from '../Btn/Btn';
import TaskCreate from '../TaskCreate/TaskCreate';
import TasksList from '../TasksList/TasksList';

import styles from './Content.module.scss';

const {content, buttons} = styles;


const Content = () => {
    const [tasks, setNewTask] = useState([
        {id: 1, name: 'Погулять с собакой'},
        {id: 3, name: 'Приготовить еду'},
        {id: 2, name: 'Убраться в комнате'}
    ]);

    const [tasksImportant, setNewImportantTask] = useState([]);
    const [tasksCompleted, setNewCompletedTask] = useState([]);
    
    const createNewTask = (obj) => {
        setNewTask(prev => [...prev, obj]);
    }

    return (
        <div className={content}>
            <div className={buttons}>
                <Btn color={'green'} text={'Выполненные'}/>
                <Btn color={'yellow'} text={'Избранные'}/>
            </div>
           <TasksList tasksArr={tasks} setNewTask={setNewTask}/>
           <TaskCreate createNewTask={createNewTask} tasks={tasks}/>
        </div>
    );
};

export default Content;