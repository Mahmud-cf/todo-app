import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [inputValue, setInputValue]=useState("");

  const [newValue, setNewValue]=useState([]);

  const [editMode, setEditMode]=useState(false);

  const [editTitle, setEditTitle]=useState(null)

  const mainResult = (event)=>{
    event.preventDefault();
    const todoInfo={
      id: Date.now(),
      title: inputValue,
    }
    setNewValue([...newValue, todoInfo]);
    setInputValue("");
    
  }

  const edit = (id) => {
    const searchEditTodo = newValue.find(list=> list.id===id);
    setEditMode(true);
    setEditTitle(searchEditTodo);
    setInputValue(searchEditTodo.title)
  }
  const update = (event) => {
    event.preventDefault();
    editTitle.title = inputValue;
    setInputValue("");
    setEditMode(false);
    setEditTitle(null);
  }

  const deleteList = (id) =>{
    const deletedTodoList = newValue.filter(todo=>todo.id!==id);
    setNewValue(deletedTodoList)
  }


  return (
    <div className="App">
      <form action="#">
        <input type="text" value={inputValue} 
          onChange={(event)=>setInputValue(event.target.value)} />
        <button onClick={(event)=>editMode===true?update(event):mainResult(event)} >
          {editMode===true?"Update":"add"}
        </button>        
      </form>
      <ul>
        {newValue.map(list=>(
          <li>
            <span>{list.title}</span>
            <button onClick={()=>edit(list.id)} >Edit</button>
            <button onClick={()=>deleteList(list.id)} >Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  );

}

export default App;
