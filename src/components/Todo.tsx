import { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import '../App.css';

function Todo({ todo, onRemoveTodo ,onUpdateTodo}: any) {
    const{ content, id  } = todo;
    const[editable, setEditable] = useState(false);
    const[newTodo, setNewTodo] = useState(content);
    const updateTodo=() =>{
        const request = { id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    const removeTodo=() =>{
        onRemoveTodo(id);
    }
return (


    <div style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between', gap:'10px', border:'1px solid #c4b7b7', margin:'10px', padding:'10px'}}>
        <div>{
            editable ? <input className="todo-input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" defaultValue={content} /> : content
        }
        </div>
        <div>
            <IoIosRemoveCircle className="todo-icons" onClick={removeTodo}/>{
                editable? <FaCheck className="todo-icons" onClick={updateTodo}/> : <MdEditSquare className="todo-icons" onClick={() => setEditable(true)}/>
            }
            
        </div>
    </div>
)
}

export default Todo;
