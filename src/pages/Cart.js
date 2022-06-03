import {useContext} from 'react';
import TodoContext from '../components/Context';
import Btn from '../components/Btn/Btn';
import DeletedTaskItem from '../components/DeletedTaskItem/DeletedTaskItem';
import { Link } from 'react-router-dom';
import Empty from '../components/Empty/Empty';

import styles from './Tasks.module.scss';

const {pageHeader, clearBtn} = styles;
const Cart = ({tasks, tasksClass, createNewTask, taskToCart, setNewDeletedTask}) => {
    const {sortAndFilterArray} = useContext(TodoContext);
    const deletedTasks = sortAndFilterArray(tasks);

    const onCartClear = () => {
        setNewDeletedTask([]);
    }

    return (
        <>
            <div className={pageHeader}>
                <Link to={'/'}>
                    <Btn color={'blue'} text={'Назад'}/>
                </Link>
                <h1>Корзина</h1>
            </div>
            <div className={tasksClass}>
                {tasks.length === 0 ? 
                    <Empty text={'В корзине ничего нет'}/> 
                    : 
                    deletedTasks
                    .map((task, index) => 
                        <DeletedTaskItem 
                            id={index + 1} 
                            setNewDeletedTask={setNewDeletedTask}
                            name={task.name} 
                            key={index}
                            createNewTask={createNewTask}
                            taskToCart={taskToCart}
                        />
                    )
                }
            </div>
            {tasks.length !== 0 && <button className={clearBtn} onClick={onCartClear}>Очистить корзину</button>}
        </>
    );
};

export default Cart;