import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../components/Btn/Btn';
import TaskCreate from '../components/TaskCreate/TaskCreate';
import TaskItem from '../components/TaskItem/TasksItem';
import completeImage from './icons/complete-btn.svg';
import importantImage from './icons/important-btn.svg';
import deleteImage from './icons/delete-btn.svg';

const Main = ({tasksArr, setNewTask, taskToComplete, createNewTask, buttonsStyle, tasksClass}) => {
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
                <Btn 
                    color={'yellow'} 
                    text={'Избранные'} 
                    needImage={true} 
                    image={importantImage}
                />
                <Btn 
                    color={'blue'} 
                    text={'Корзина'} 
                    needImage={true} 
                    image={deleteImage}
                />
            </div>

            <div className={tasksClass}>
                {
                    tasksArr.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
                    .map((task, index) => 
                        <TaskItem 
                            id={index + 1} 
                            name={task.name} 
                            key={task.id}
                            setNewTask={setNewTask}
                            taskToComplete={taskToComplete}
                        />
                    )
                }
            </div>

           <TaskCreate createNewTask={createNewTask} tasks={tasksArr}/>
        </>
    );
};

export default Main;