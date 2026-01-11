import './App.css';
import TodoCreate from './components/TodoCreate';
function App() {

  return (

    <div className='App'>
      <div style={{width:'500px', display:'flex', flexDirection:'column', allignItems:'center', justifyContent:'center', gap:'20px'}}>
        <TodoCreate/>
      </div>

    </div>
  )
}

export default App
