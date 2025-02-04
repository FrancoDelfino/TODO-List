
function App() {
  
  return (
   <div className="w-full h-full absolute bg-gradient-to-r from-blue-700 to-emerald-400 flex items-center justify-center">
        <div className="bg-white bg-opacity-95 shadow-xl rounded-lg p-16">
          <h1 className="text-3xl w-full font-bold text-center border-b-2 border-blue-800 pb-4">Que tareas tenés hoy?</h1>
          <div className="flex space-x-10 mt-10">
            <input className="
               placeholder-black border-2
               border-blue-300 p-2 rounded-xl
                focus:outline-none focus:border-blue-600 focus:placeholder-transparent"
                type="text"
                placeholder="Escribe una tarea nueva"/>
            <button className="bg-blue-300 p-4 rounded-xl hover:bg-blue-400 ">Agregar tarea</button>
          </div>
        </div>
   </div>
  )
}

export default App
