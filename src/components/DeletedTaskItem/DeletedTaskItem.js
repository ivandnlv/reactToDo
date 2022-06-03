import {useState} from 'react';

import styles from '../TaskItem/TaskItem.module.scss';

const {tasksItem, blue, defaultClr, recoverBtn} = styles;
const DeletedTaskItem = ({id, name, taskToCart, createNewTask, setNewDeletedTask}) => {
    const [inputDisable, setInputDisable] = useState(false);
    const [color, setColor] = useState('blue');


    const onClickRecover = () => {
        const obj = {id, name};
        createNewTask(obj);
        setNewDeletedTask(prev => prev.filter(item => item.name !== obj.name));
    }

    const chooseColor = color === 'blue' ? blue : defaultClr;

    return (
        <div className={tasksItem + ' ' + chooseColor}>
            {inputDisable ? 
                <input 
                    type="text" 
                    value={id + '.' + ' ' + name}
                /> :
                 <input 
                    type="text" 
                    value={id + '.' + ' ' + name}  
                    disabled
                />
            } 

            <button 
                className={recoverBtn}
                onClick={onClickRecover}
            >
                Восстановить
            </button>
        </div>
    );
};

export default DeletedTaskItem;