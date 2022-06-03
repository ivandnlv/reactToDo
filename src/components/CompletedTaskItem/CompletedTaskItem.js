import React, {useState, useRef} from 'react';
import editIcon from '../TaskItem/icons/edit-btn.svg';
import editDoneIcon from '../TaskItem/icons/edit-done-btn.svg';
import completeIcon from '../TaskItem/icons/complete-btn.svg';
import deleteIcon from '../TaskItem/icons/delete-btn.svg';

import styles from '../TaskItem/TaskItem.module.scss';

const {tasksItem, green, defaultClr} = styles;

const CompletedTaskItem = ({id, name, setNewTask, taskToComplete, createNewTask, setNewCompletedTask}) => {
    const [inputDisable, setInputDisable] = useState(false);
    const [color, setColor] = useState('green');
    const input = useRef(null);

    const onClickComplete = () => {
        const obj = {id, name};
        createNewTask(obj);
        taskToComplete(obj);
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
        setNewCompletedTask(prev => prev.filter(item => item.id !== id));
        setNewCompletedTask(prev => [...prev, obj]);
    }

    const chooseColor = color === 'green' ? green : defaultClr;

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

            <button className='tasks__item-complete'>
                <img src={completeIcon} alt="completed" onClick={onClickComplete}/>
            </button>

            <button className='tasks__item-remove'>
                <img src={deleteIcon} alt="delete"/>
            </button>
        </div>
    );
};

export default CompletedTaskItem;