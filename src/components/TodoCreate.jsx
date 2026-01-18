import { useState } from 'react';
import '../App.css';

function TodoCreate({ onCreateToDo }) {
    
    const [newTodo,setNewTodo]=useState('');
    const clearInput=()=>{
        setNewTodo('');
    }

    const createTodo=()=>{
    if(!newTodo)return;
    const request={
        id:Math.floor(Math.random()*1000),
        content:newTodo
}
    onCreateToDo(request);
    clearInput();
}

  return (
    <div className="todo-create">
        <input  value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className="todo-input" type="text" placeholder='Write a task!'/>
        <button onClick={createTodo} className='todo-button'>Add</button>
    </div>
  );
}

export default TodoCreate;