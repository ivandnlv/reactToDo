import React, {useState, useRef} from 'react';
import editIcon from './icons/edit-btn.svg';
import editDoneIcon from './icons/edit-done-btn.svg';
import deleteIcon from './icons/delete-btn.svg';
import importantIcon from './icons/important-btn.svg';
import completeIcon from './icons/complete-btn.svg';

import styles from './TaskItem.module.scss';

const {tasksItem, defaultClr} = styles; 

const TaskItem = ({id, name, setNewTask, taskToComplete, colorName, taskToImportant, taskToCart}) => {
    const [inputDisable, setInputDisable] = useState(false);
    const input = useRef(null);

    const obj = {id, name};

    const onClickComplete = () => {
        taskToComplete(obj);
    }

    const onClickEdit = () => {
        setInputDisable(!inputDisable);
        if (!inputDisable) {
            setTimeout(() => input.current.focus(), 50);
        }
    }

    const onClickImportant = () => {
        taskToImportant(obj);
    }

    const onClickDelete = () => {
        taskToCart(obj);
    }

    const onClickEnterKey = (e) => {
        if (e.keyCode === 13) {
            setInputDisable(!inputDisable);
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
        <div className={tasksItem + ' ' + defaultClr}>
            {inputDisable ? 
                <input 
                    type="text" 
                    value={id + '.' + ' ' + name}
                    onChange={(e) => onChangeInput(e)}
                    ref={input}
                    onKeyDown={(e) => onClickEnterKey(e)}
                /> :
                 <input 
                    type="text" 
                    value={id + '.' + ' ' + name}  
                    disabled
                />
            } 

            <button className='tasks__item-edit'>
                <img src={inputDisable ? editDoneIcon : editIcon} alt="edit" onClick={onClickEdit}/>
            </button>

            <button className='tasks__item-complete'>
                <img src={completeIcon} alt="completed" onClick={onClickComplete}/>
            </button>

            <button className='tasks__item-important'>
                <img src={importantIcon} alt="important" onClick={onClickImportant}/>
            </button>

            <button className='tasks__item-remove'>
                <img src={deleteIcon} alt="delete" onClick={onClickDelete}/>
            </button>
        </div>
    );
};

export default TaskItem;