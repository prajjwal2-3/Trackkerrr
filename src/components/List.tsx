import useTodoStore from "../store/Store";

export default function List() {
  const todo = useTodoStore();
  function markComplete(id: number) {
    todo.toggleTodo(id);
  }
  return (
    <div className="xl:w-8/12">
      {todo.todos.length === 0 ? (
        <div className="w-full min-h-40 xl:h-full flex justify-center items-center">
          <p className="text-2xl font-semibold text-slate-400">
            Add Your First Todo!!
          </p>
        </div>
      ) : (
        todo.todos.map((e) => (
          <div key={e.id} className="w-full flex justify-between p-4 border">
            <section className="flex w-8/12">
            <div
              onClick={() => {
                markComplete(e.id);
              }}
              className={`w-6 h-6 ${
                e.completed ? "bg-green-500" : "border border-gray-600"
              }  rounded-lg cursor-pointer` }
            ></div>
            <p className=" mx-5">{e.text}</p>
            </section>
            <div className="cursor-pointer" onClick={()=>{
                todo.removeTodo(e.id)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
