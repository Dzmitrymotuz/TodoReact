// import { useState } from "react";
// import Displaying from "./Displaying";

// export default function Todo(){
//     const [todo, setTodo] = useState("");
//     const [todoList, setTodoList] = useState([]);
//     const handleChange=(event)=>{
//         setTodo(event.target.value);
//     }

//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         let tempList = todoList;
//         tempList.push(todo);
//         setTodoList(tempList);
//         console.log(todoList);
//         setTodo("");
//     }

//     return (<div>
//         <form onSubmit={handleSubmit}>
//             <input value={todo} onChange={handleChange} type="text"></input>
//             <button type="submit" >Submit</button>
//         </form>
//         {todoList.map((item, index)=>(
//             <Displaying  key={index} name={item}>
//             </Displaying>
//         ))}
//     </div>);
// }