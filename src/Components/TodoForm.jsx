import React from 'react'

// creating the input box and add button to add todo list items
const TodoForm = (props) => {
  return (
    <form className="todoForm" onSubmit={props.handleSubmit}>
         <input type="text" className="input" value={props.todo} placeholder="Enter Your Todo..." onChange={(e) => props.setTodo(e.target.value)} />
         <button type="submit" className="btn">  {props.editId ? "Edit" : "Add"} </button>
    </form>
  )
}

export default TodoForm;
