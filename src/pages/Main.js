import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../components/Btn/Btn';
import TaskCreate from '../components/TaskCreate/TaskCreate';
import TaskItem from '../components/TaskItem/TasksItem';
import completeImage from './icons/complete-btn.svg';
import importantImage from './icons/important-btn.svg';
import deleteImage from './icons/delete-btn.svg';
import SearchContext from '../components/Context';
import Empty from '../components/Empty/Empty';

const Main = ({tasksArr, setNewTask, taskToComplete, createNewTask, buttonsStyle, tasksClass, taskToImportant}) => {
    const {sortAndFilterArray} = useContext(SearchContext);
    const tasks = sortAndFilterArray(tasksArr);
    
    return (
        <>
            <div className={buttonsStyle}>
                <Link to='/completed'>
                    <Btn 
                        color={'green'} 
                        text={'Выполненные'} 
                        needImage={true} 
                        image={completeImage}
                    />
                </Link>
                <Link to='/important'>
                    <Btn 
                        color={'yellow'} 
                        text={'Избранные'} 
                        needImage={true} 
                        image={importantImage}
                    />
                </Link>
                <Btn 
                    color={'blue'} 
                    text={'Корзина'} 
                    needImage={true} 
                    image={deleteImage}
                />
            </div>

            <div className={tasksClass}>
                {   tasksArr.length === 0 ?
                        <Empty text={'У вас нет дел. Вы бездельник? :)'} />
                    :
                        tasks.map((task, index) => 
                        <TaskItem 
                            id={index + 1} 
                            name={task.name} 
                            key={task.id}
                            setNewTask={setNewTask}
                            taskToComplete={taskToComplete}
                            taskToImportant={taskToImportant}
                        />
                    )
                }
            </div>

           <TaskCreate createNewTask={createNewTask} tasks={tasksArr}/>
        </>
    );
};

export default Main;