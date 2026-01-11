import '../App.css';
function TodoCreate() {
  return (
    <div className="todo-create">
        <input className="todo-input" type="text" placeholder='Write a task!'/>
        <button>Add</button>
    </div>
  );
}

export default TodoCreate;