import { useState } from "react";

const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false
    })

    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        const {todoName, todoDescripcion} = todo;

        if(!todoDescripcion.trim() || !todoName.trim()){
            setError(true)
            return;
        }

        setError(false)
    }

    const handleChange = e => {
        const {name, value, checked, type} = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    )

    return (
        <>
            <h2>Controlado</h2>

            {
                // error ? <PintarError/> : null
                error && <PintarError/>
            }

            <form onSubmit={handleSubmit}>
                <input  type="text"
                        placeholder="Ingrese su tarea..."
                        name="todoName"
                        className="form-control mb-2"
                        onChange={handleChange}
                        value={todo.todoName}
                />
                <textarea   name="todoDescripcion"
                            className="form-control mb-2"
                            placeholder="Ingrese descripción del todo..."
                            onChange={handleChange}
                            value={todo.todoDescripcion}
                />
                <select name="todoEstado"
                        className="form-control mb-2"
                        onChange={handleChange}
                        value={todo.todoEstado}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>

                <div className="form-check">
                    <input className="form-check-input" 
                           type="checkbox" 
                           id="flexCheckDefault"
                           name="todoCheck"
                           onChange={handleChange}
                           checked={todo.todoCheck}
                    />
                    <label className="form-check-label" 
                           htmlFor="flexCheckDefault"
                    >
                        Prioritaria
                    </label>
                </div>

                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}

export default Formulario;