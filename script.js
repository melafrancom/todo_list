import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

( () => {
    const botonAgregar = document.querySelector("[data-form-btn]");
    const crearRespuesta = (evento) => {
        evento.preventDefault();
        const escribirTexto = document.querySelector("[data-form-input]");
        const valor = escribirTexto.value;
        const lista = document.querySelector("[data-lista]");
        const task = document.createElement("li");
        escribirTexto.value = '';
    
        const taskContenido = document.createElement("div");
        taskContenido.appendChild(checkComplete());
    
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = valor;
        taskContenido.appendChild(titleTask);
        
        task.appendChild(taskContenido);
        task.appendChild(deleteIcon());
        lista.appendChild(task);
    
        task.classList.add('card'); /* le agregamos estilo css */
    
    }
    
    botonAgregar.addEventListener("click", crearRespuesta);
})()
