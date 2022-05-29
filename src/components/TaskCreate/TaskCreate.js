import React, {useState} from 'react';
import Btn from '../Btn/Btn';

import styles from './TaskCreate.module.scss';

const {taskCreate} = styles;

const TaskCreate = ({createNewTask, tasks}) => {
    const [value, setValue] = useState('');

    const onClickCreate = () => {
        if (value !== '') {
            const num = tasks.length + 1;
            const text = value;
            createNewTask({id: num, name: text});
            setValue('');
        } else {
            alert('Вы ничего не ввели');
        }
    }

    const onInputChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={taskCreate}>
            <input type="text" placeholder='Введите название задачи...' value={value} onChange={(e) => onInputChange(e)}/>
            <Btn text={'Создать задачу'} color={'green'} action={onClickCreate}/>
        </div>
    );
};

export default TaskCreate;