import React, { useEffect, useState } from 'react'
import { Button } from './componets/Button'
import { Input } from './componets/Input'

type TodosType = {
    userId:number
    id:number
    title:string
    completed:boolean
}


export default function Dop3() {

    const [todos,setTodos] = useState<TodosType[]>([])
    const [newTitle, setNewTitle] = useState('')
    


    const myFetch = () =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() =>{
        myFetch()
    },[])
    

    const showUpHandler = () =>{
        myFetch()
    }

    const mappedTodos = todos.map(el=> {
        return(
            <li>
                
                <span>{el.id}</span>
                <span>{el.title}</span>
                <input type="checkbox" checked={el.completed} />

            </li>
        )
    
    })


    const addNewTitle = () =>{
      const  newTodo = {userId:100200, id:todos.length +1, title:newTitle, completed:true}
      setTodos([newTodo,...todos])
      setNewTitle('')
    }

    const deleteHandler = () =>{
        setTodos([])
    }



  return (
    <div className='App'>
        <Button name={'Show up'}  callBack={showUpHandler} />
        <Button name={'DELETE'}  callBack={deleteHandler} />
        <Input setNewTitle={setNewTitle} newTitle={newTitle} />
        <Button  name={'add newTitle'} callBack={addNewTitle} />
        <ul>
           {mappedTodos}
        </ul>
    </div>
  )
}
