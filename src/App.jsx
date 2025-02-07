import { useState } from "react"

function App() {
  
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
      if (input.trim()) {
         setTodos([...todos, {id: Date.now(), text: input, completed: false}]) 
         setInput("")
       }
  }
  console.log(todos);
  return (
   <div className="w-full h-full absolute bg-gradient-to-r from-blue-700 to-emerald-400 flex items-center justify-center">
        <div className="bg-white bg-opacity-95 shadow-xl rounded-lg p-16">
          <h1 className="text-3xl w-full font-bold text-center border-b-2 border-blue-800 pb-4 mb-8">Que tareas tenés hoy?</h1>
          <div className="flex mb-4">
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}

            className="
               placeholder-black border-2
               border-blue-500 px-3 py-2 rounded-l-lg
                flex-grow
                focus:outline-none focus:border-blue-600 focus:placeholder-transparent"
                type="text"
                placeholder="Escribe una tarea nueva"/>
            <button
            onClick={addTodo}
            className="bg-blue-500 p-4 rounded-r-lg hover:bg-blue-600 text-white">Agregar</button>
          </div>
          <ul>
            {
              todos.map((todo) => (
                <li
                key= {todo.id}
                className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200"
                >
                                  
                  <input type="checkbox"
                  checked={todo.completed}
                  onChange={() => setTodos(
                    todos.map((t) => (
                      t.id === todo.id ? {...t, completed: !t.completed} : t
                    ))
                  )}
                  className="h-5 w-5 accent-green-600"
                  />
                  <span
                  className={`flex-grow pl-4 font-bold ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                  >{todo.text}</span>

                  <button
                  onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                  className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                  >
                    Eliminar
                  </button>

                </li>
              ))
            }
          </ul>
        </div>
   </div>
  )
}

export default App
