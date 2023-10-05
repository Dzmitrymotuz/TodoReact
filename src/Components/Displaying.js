import styles from "./ToDo.module.css"

const Delete = (event) =>{
    event.preventDefault();
    
}

const Displaying=(props)=>{
    return <div className={styles.container}>
        {props.name}
        <div>

        </div>
        <div>
            <button onClick={Delete} className={styles.btn} type='delete'>Delete</button>
        </div>
    </div>
}

export default Displaying;