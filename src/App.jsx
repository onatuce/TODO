import { useEffect, useState } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';


function App() {
  const [todos,setTodos]=useState([]);
// Create a new todo item
  const createTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);
  }
// Remove a todo item
  const removeTodo=(id)=>{
    setTodos(todos.filter(todo => todo.id !== id));
  }
  useEffect(() => {
  if (todos.length === 10) {
    alert('🏆Congratulations!🏆 You have 10 todos! 🏆and you found the secret message!🏆');
  }
}, [todos.length]);

// Update a todo item  
const updateTodo=(newTodo)=>{
    const updateTodos=todos.map((todo)=>{
           if (todo.id!==newTodo.id){
        return todo;
      } 
      return newTodo;
  })
    setTodos([...updateTodos]);
  }

  console.log(todos);

  return (

    <div className='App'>
      <div style={{width:'500px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'20px'}}>
        <TodoCreate onCreateToDo={createTodo}/>
        <p style={{fontSize:'14px'}}> Total: {todos.length} todos</p>
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>

    </div>
  )
}

export default App
