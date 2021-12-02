const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector("#input-nombre");
const inputEmail = document.querySelector("#input-email");
const inputDireccion = document.querySelector("#input-direccion");
const inputTelefono = document.querySelector("#input-tel");
const botonEnviar = document.querySelector("#input-enviar");

const pedirInfoActualizada = () => {
  fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
  .then((res) =>  res.json())
  .then((data) => {
    console.log(data)
    crearTablaHTML(data)
  })
}

pedirInfoActualizada();

const crearTablaHTML = (data) => {
  const tabla = document.querySelector("#tabla")
  const html = data.reduce((acc, curr) => {
    return acc + `  
    <tr>
      <td>${curr.fullname}</td>
      <td>${curr.email}</td>
      <td>${curr.address}</td>
      <td>${curr.phone}</td>
      <td>
        <button id="${curr.id}" class="boton-editar">Editar usuario</button>
        <button id="${curr.id}" class="boton-eliminar">Eliminar usuario</button>
      </td>
    </tr>
    `
  }, `
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Direccion</th>
      <th>Telefono</th>
      <th>Acciones</th>
    </tr>
    `)

    tabla.innerHTML = html
}

// BOTON EDITAR
// Llamar a los botones desde JS con querySelectorAll
// Hacer un for que recorra el array de botones
// Adentro del for, hacer botones[i].onclick
// Guardar en una variable el ID del boton = botones[i].id
// Hacer un PUT para modificar la info
// En la url del PUT interpolar la variable ID
// Ejecutamos la funcion pedirInfoActualizada() (que es igual a hacer un GET)

// BOTON ELIMINAR
// Llamar a los botones desde JS con querySelectorAll
// Hacer un for que recorra el array de botones
// Adentro del for, hacer botones[i].onclick
// Guardar en una variable el ID del boton = botones[i].id
// Hacer un DELETE para borrar la info
// En la url del DELETE interpolar la variable ID
// Ejecutamos la funcion pedirInfoActualizada() (que es igual a hacer un GET)

const agregarUsuarioNuevo = () => {
  fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
    method: "POST", 
    body:
      JSON.stringify({
        address: inputDireccion.value, 
        email: inputEmail.value, 
        fullname: inputNombre.value, 
        phone: inputTelefono.value, 
      }), 
      headers: {
        "Content-Type": "application/json"
      } 
  }) .then((res) =>  res.json())
  .then((data) => {
  console.log(data)
  pedirInfoActualizada();
  })
}

formulario.onsubmit = (e) => {
  e.preventDefault();
  agregarUsuarioNuevo();
}