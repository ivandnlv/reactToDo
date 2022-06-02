import React, {useState} from 'react';
import { Route, Router } from 'react-router-dom';
import CompletedTasks from '../../pages/CompletedTasks';
import ImportantTasks from '../../pages/ImportantTasks';
import Main from '../../pages/Main';

import styles from './Content.module.scss';

const {content, buttons, tasksList} = styles;


const Content = () => {
    const [tasks, setNewTask] = useState([
        {id: 1, name: 'Погулять с собакой'},
        {id: 3, name: 'Приготовить еду'},
        {id: 2, name: 'Убраться в комнате'}
    ]);

    
    const [tasksImportant, setNewImportantTask] = useState([]);
    const [tasksCompleted, setNewCompletedTask] = useState([]);
    
    const createNewTask = (obj) => {
        if (tasks.find(favObject => favObject.name === obj.name)) {
            setNewTask(prev => prev.filter(item => item.name !== obj.name));
        } else  setNewTask(prev => [...prev, obj]);
    }

    const taskToComplete = (obj) => {
        if (tasksCompleted.find(completedObj => completedObj.name === obj.name)) {
            setNewCompletedTask(prev => prev.filter(item => item.name !== obj.name));
        } else {
            setNewTask(prev => prev.filter(item => item.name !== obj.name));
            setNewCompletedTask(prev => [...prev, obj]);
        }
    }

    const taskToImportant = (obj) => {
        if (tasksImportant.find(imporantObj => imporantObj.name === obj.name)) {
            setNewImportantTask(prev => prev.filter(item => item.name !== obj.name));
        } else {
            setNewTask(prev => prev.filter(item => item.name !== obj.name));
            setNewImportantTask(prev => [...prev, obj]);
        }
    }
    

    return (
        <div className={content}>
            <Route path="/" exact>
                <Main 
                    tasksClass={tasksList}
                    tasksArr={tasks} 
                    setNewTask={setNewTask} 
                    taskToComplete={taskToComplete} 
                    taskToImportant={taskToImportant}
                    createNewTask={createNewTask}
                    buttonsStyle={buttons}
                />
            </Route>
            <Route path="/completed" exact>
                <CompletedTasks
                    tasksClass={tasksList}
                    tasks={tasksCompleted} 
                    taskToComplete={taskToComplete} 
                    createNewTask={createNewTask}
                    buttonsStyle={buttons}
                />
            </Route>
            <Route path="/important" exact>
                <ImportantTasks 
                    tasksClass={tasksList}
                    tasks={tasksImportant} 
                    taskToImportant={taskToImportant} 
                    createNewTask={createNewTask}
                    buttonsStyle={buttons}
                />
            </Route>
        </div>
    );
};

export default Content;