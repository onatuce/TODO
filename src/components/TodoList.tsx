import '../App.css';
import Todo from './Todo';


function TodoList({ todos ,onRemoveTodo,onUpdateTodo}: any) {

  return (

    <div style={{width:'100%',border:'1px solid black', marginTop:'50px', padding:'10px'}}>
        {
            todos&&todos.map((todo: any)=>(
                <Todo todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo}/>

            ))
        }
    </div>
  )
}

export default TodoList;
