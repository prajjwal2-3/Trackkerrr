import { useState } from "react"
import Button from "./ui/Button"
import useTodoStore from "../store/Store"

export default function Items() {
    const [todo,settodo]=useState('')
   const interactwithtodo = useTodoStore()
  return (
    <div className="w-4/12 border h-6/6 flex flex-col">
      <p className="p-2 font-semibold w-full text-center text-slate-800">ADD TODO</p>
      <section className="flex flex-col  p-7 w-full justify-between h-full">
      <section className="flex flex-col gap-3">
      <input type="text" name="" id="" value={todo}
      className="border p-2 rounded-md outline-none"
      placeholder="Add todo..."
      onChange={(e)=>{
        settodo(e.target.value)
      }}/>
     <Button text="Add todo!"  onclick={()=>{
      interactwithtodo.addTodo(todo)
      settodo('')
     }}/>
      </section>
     <section className="w-full flex flex-col gap-1.5">
        <Button text="Mark All Complete" onclick={()=>{
      interactwithtodo.markAllComplete()
        }}/>
        <Button text="Mark All Incomplete" onclick={()=>{
          interactwithtodo.markAllIncomplete()
        }}/>
        <Button text="Remove All" onclick={()=>{
          interactwithtodo.removeAllTodo()
        }}/>
      </section>
      </section>
      
    </div>
  )
}
