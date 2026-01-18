import { useState } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';


function App() {


  const [todos,setTodos]=useState([]);

  const createTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);
  }

  const removeTodo=(id)=>{
    setTodos(todos.filter(todo => todo.id !== id));
  }

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
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>

    </div>
  )
}

export default App
