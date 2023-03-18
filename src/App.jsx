import React, { useState,useEffect } from "react";
import './App.css';
import TodoForm from "./Components/TodoForm";
import ToDoList from "./Components/ToDoList";


const App = () => {

   // using the states 
    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);
    const [editId, setEditId] = useState(0);


   //  fetching the data from API 
    useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((json) => {
            json.map((x) => {
               console.log(x);
               setTodos([{id: `${x.id}` , todo : `${x.title}`},...todos])
            })
			});
	}, []);




    // function will call when form is submitted 
    const handleSubmit = (e) => {
       e.preventDefault();


      //  function to edit the todo items 
      if (editId) {
         const editTodo = todos.find((i) => i.id === editId);
         const updatedTodos = todos.map((t) =>
           t.id === editTodo.id
             ? (t = { id: t.id, todo })
             : { id: t.id, todo: t.todo }
         );
         setTodos(updatedTodos);
         setEditId(0);
         setTodo("");
         return;
       }


      // adding the todo items 
       if(todo !== ""){
           setTodos([{id : `${todo} - ${Date.now()}` , todo},...todos]);
           setTodo("");
       }

    }


    // function to delete the item 
    const deleteItem = (id) =>{
         const newTodo = todos.filter((x) => x.id !== id);
         setTodos([...newTodo]);
    }

   //  function to edit the todo items 
   const handleEdit = (id) => {
      const editTodo = todos.find((i) => i.id === id);
      setTodo(editTodo.todo);
      setEditId(id);
    };

    return(
        <React.Fragment>
           <div className="App">
               <div className="container">
                   <h1>ToDo List App </h1>
                   {/* importing the form component  */}
                   <TodoForm handleSubmit={handleSubmit} todo={todo}  setTodo= {setTodo}  editId={editId} />

                   {/* importing the todo list  */}
                   <ToDoList todos={todos} handleEdit={handleEdit} deleteItem={deleteItem} />

                </div>
           </div>
        </React.Fragment>
    )
}

export default App;