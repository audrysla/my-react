import React, {useEffect, useRef, useState} from 'react';
import './App.css';

import ItemList2 from "./components/ItemList2";

function App2() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  
  const inputRef = useRef()

  const addItem = () => {
    let inputVal = document.querySelector('.inputVal').value
    if (inputVal == '') {
      alert("할일을 입력해주세요.");
      return;
    }
    setInputValue(inputVal)
    setTodoList([...todoList, inputVal])
  }
  
  const del = (index) =>{
    todoList.splice(index, 1)
    setTodoList([...todoList])
  }

  // 모달 온
  // 자식 컴포넌트에서 부모 함수 호출 방법
  // 함수를 propos로 넘겨줘서 호출
  const test = () => {
    console.log("d")
  }
 
  useEffect(() => {
    // console.log(todoList)
    console.log(inputRef) 
    inputRef.current.focus()
  }, [todoList])

  return (
    <main>
      <h1>TodoBoard</h1>
      <input type="text" className='inputVal' ref={inputRef}/>
      <button onClick={addItem}>추가</button>
      <div>
        <h2>List</h2>
        <ul>
          {todoList.map((item, index) =>
            <ItemList2 item={item} index={index} fn={del}/>
          )}
        </ul>
      </div>    
    </main>
  );
}
export default App2;

