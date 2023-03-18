import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


// rendering all the todo list items 
const ToDoList = (props) => {
  return (
    <ul className="alltodos">
    {
       props.todos.map((x) => {
         return(
            <li className="singletodo">
                 <span className="todotext" key={x.id} >{x.todo}</span>
                 <button onClick={() => props.handleEdit(x.id)}>  <EditIcon /></button>
                 <button onClick={() => props.deleteItem(x.id)} > <DeleteIcon/></button>
            </li>
         )
       })
    }
   </ul>
  )
}

export default ToDoList;

