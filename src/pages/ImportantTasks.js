import {useContext} from 'react';
import TodoContext from '../components/Context';
import Empty from '../components/Empty/Empty';
import Btn from '../components/Btn/Btn';
import { Link } from 'react-router-dom';
import ImportantTaskItem from '../components/ImportantTasksItem/ImportantTaskItem';

import styles from './Tasks.module.scss';

const {pageHeader} = styles;
const ImportantTasks = ({tasks, tasksClass, setNewTask, createNewTask, taskToImportant}) => {
    const  {sortAndFilterArray} = useContext(TodoContext);
    const importantTasks = sortAndFilterArray(tasks)

    return (
        <>
            <div className={pageHeader}>
                <Link to={'/'}>
                    <Btn color={'yellow'} text={'Назад'}/>
                </Link>
                <h1>Избранные задачи</h1>
            </div>
            <div className={tasksClass}>
                {importantTasks.length === 0 ? 
                    <Empty text={'Вы не поместили в избранное ни одной задачи'}/> 
                    : 
                    importantTasks
                    .map((task, index) => 
                        <ImportantTaskItem 
                            id={index + 1} 
                            name={task.name} 
                            key={index}
                            createNewTask={createNewTask}
                            taskToImportant={taskToImportant}
                        />
                    )
                }
            </div>
        </>
    );
};

export default ImportantTasks;