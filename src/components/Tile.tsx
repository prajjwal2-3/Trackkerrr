

import useTodoStore from "../store/Store"
import Items from "./Items"
import List from "./List"
export default function Tile() {
  const todo = useTodoStore()
  return (
    <div className="bg-white flex flex-col rounded-md h-full w-10/12">
      <div className="bg-gray-100 h-[13%] rounded-t-md justify-between flex items-center p-5">
      <h1 className="text-2xl text-center text-slate-800 font-semibold">Trakkker</h1>
      <h1>
     <span className="font-semibold"> {todo.todos.filter((e)=>e.completed).length}</span>/{todo.todos.length} Completed
      </h1>
     
      </div>
     <section className="flex flex-col xl:flex-row h-[87%]">
     <List/>
     <Items/>
     </section>
    </div>
    )
}
