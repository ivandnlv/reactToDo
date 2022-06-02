import React, {useState, useRef} from 'react';
import editIcon from '../TaskItem/icons/edit-btn.svg';
import editDoneIcon from '../TaskItem/icons/edit-done-btn.svg';
import importantImage from '../TaskItem/icons/important-btn.svg';
import deleteIcon from '../TaskItem/icons/delete-btn.svg';

import styles from '../TaskItem/TaskItem.module.scss';

const {tasksItem, yellow, defaultClr} = styles;

const CompletedTaskItem = ({id, name, setNewTask, taskToImportant, createNewTask}) => {
    const [inputDisable, setInputDisable] = useState(false);
    const [color, setColor] = useState('yellow');
    const input = useRef(null);

    const onClickImportant = () => {
        const obj = {id, name};
        createNewTask(obj);
        taskToImportant(obj);
    }

    const onClickEdit = () => {
        setInputDisable(!inputDisable);
        if (!inputDisable) {
            setTimeout(() => input.current.focus(), 50);
        }
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

    const chooseColor = color === 'yellow' ? yellow : defaultClr;

    return (
        <div className={tasksItem + ' ' + chooseColor}>
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

            <button className='tasks__item-important'>
                <img src={importantImage} alt="completed" onClick={onClickImportant}/>
            </button>

            <button className='tasks__item-remove'>
                <img src={deleteIcon} alt="delete"/>
            </button>
        </div>
    );
};

export default CompletedTaskItem;