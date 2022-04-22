import { useRef } from "react";

const FormNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const datos = new FormData(formulario.current);

        // array
        console.log(...datos.entries());

        // de array a objeto
        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos);

        // destructuración
        const {todoDescripcion, todoEstado, todoName} = objetoDatos;

        if(!todoDescripcion.trim()){
            console.log("nooooo")
            return
        }

        console.log("pasó validaciones")
    }   

  return (
    <>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
          <input type="text"
                 placeholder="Ingrese su tarea..."
                 name="todoName"
                 className="form-control mb-2"
                 defaultValue="Tarea #01"
           />
           <textarea name="todoDescripcion"
                     className="form-control mb-2"
                     placeholder="Ingrese descripción del todo..."
                     defaultValue="Descripción Tarea #01"
            />
            <select name="todoEstado"
                    className="form-control mb-2"
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button 
                    className="btn btn-primary">
                        Agregar
            </button>
      </form>
    </>
  )
}

export default FormNoControlado;
