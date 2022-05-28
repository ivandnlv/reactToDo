import React, {useState, useRef} from 'react';
import editIcon from './icons/edit-btn.svg';
import deleteIcon from './icons/delete-btn.svg';
import importantIcon from './icons/important-btn.svg';
import completeIcon from './icons/complete-btn.svg';

import styles from './TaskItem.module.scss';

const {tasksItem} = styles; 

const TaskItem = ({id, name, onTaskCompleted, onTaskImportant, onTaskDelete, setNewTask}) => {
    const [inputDisable, setInputDisable] = useState(false);
    const input = useRef(null);

    const onClickEdit = () => {
        setInputDisable(!inputDisable);
        if (!inputDisable) {
            setTimeout(() => input.current.focus(), 50);
        }
    }

    const onChangeInput = (e) => {
        const num = id;
        const text = e.target.value.slice(3);
        const obj = {id: num, name: text}
        setNewTask(prev => prev.filter(item => item.id !== id));
        setNewTask(prev => [...prev, obj]);
    }

    return (
        <div className={tasksItem}>
            {inputDisable ? 
                <input 
                    type="text" 
                    value={id + '.' + ' ' + name}
                    onChange={(e) => onChangeInput(e)}
                    ref={input}
                /> :
                 <input 
                    type="text" 
                    value={id + '.' + ' ' + name}  
                    disabled
                />
            } 

            <button className='tasks__item-edit'>
                <img src={editIcon} alt="edit" onClick={onClickEdit}/>
            </button>

            <button className='tasks__item-complete'>
                <img src={completeIcon} alt="completed" onClick={onTaskCompleted}/>
            </button>

            <button className='tasks__item-important'>
                <img src={importantIcon} alt="important" onClick={onTaskImportant}/>
            </button>

            <button className='tasks__item-remove'>
                <img src={deleteIcon} alt="delete" onClick={onTaskDelete}/>
            </button>
        </div>
    );
};

export default TaskItem;