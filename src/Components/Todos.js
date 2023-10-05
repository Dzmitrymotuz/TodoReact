import styles from "../style.module.css"




const Todos=({todoItem, todoList, setTodoList})=>{
    const handleDelete=()=>{
        setTodoList(todoList.filter(item => item.id !== todoItem.id));
    }

    return(
        <div>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{todoItem.name}</h3>
                <button onClick={handleDelete} className={styles.deletebutton}>Done</button>
            </div>
        </div>
    );
};
export default Todos;