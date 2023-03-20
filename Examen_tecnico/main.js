let NombreEmpleado = document.getElementById("nombre") ;
let ApellidoEmpleado = document.getElementById("apellido") ;
let StatusEmpleado = document.getElementById("status-switch") ;
let boton = document.getElementById("btnCrearEmp");
let ListEmp = document.getElementById("TotalEmpleados");
let ListEmpActivos = document.getElementById("Activos");
let ListEmpInactivos = document.getElementById("Inactivos");
let layout = document.getElementById("layout");

let ArrayEmp = [
  {
    nombre: "Juan",
    apellido: "Perez",
    status: true,
  },
  {
    nombre: "Pedro",
    apellido: "Gomez",
    status: false,
  },
  {
    nombre: "Maria",
    apellido: "Gonzalez",
    status: true,
  },
  {
    nombre: "Jose",
    apellido: "Lopez",
    status: false,
  }
];

layout.appendChild(ApiConnection());



ClasificarEmpleados();
boton.addEventListener("click",(e)=>{
  e.preventDefault();
  BorrarListados();
  AgregarEmpleado();
})

function ClasificarEmpleados(){
  ArrayEmp.forEach((empleado) => {
    let NuevoTexto = document.createElement("p");
    NuevoTexto.innerHTML = `${empleado.nombre} ${empleado.apellido}`;
    ListEmp.appendChild(NuevoTexto)
  });

  ArrayEmp.forEach((empleado) => {
    let NuevoTexto = document.createElement("p");
    NuevoTexto.innerHTML = `${empleado.nombre} ${empleado.apellido}`;
    if (empleado.status == true){
      ListEmpActivos.appendChild(NuevoTexto)
    }else{
      ListEmpInactivos.appendChild(NuevoTexto)
    }
  });
}

function AgregarEmpleado() {
  let NuevoEmpleado = {
    nombre: NombreEmpleado.value,
    apellido: ApellidoEmpleado.value,
    status: StatusEmpleado.checked,
  }
  ArrayEmp.push(NuevoEmpleado);
  ClasificarEmpleados();
};

function BorrarListados(){
  ListEmp.innerHTML = "";
  ListEmpActivos.innerHTML = "";
  ListEmpInactivos.innerHTML = "";


  ListEmp.innerHTML = `<h1>Total de Empleados</h1>`;
  ListEmpActivos.innerHTML = `<h1>Empleados Activos</h1>`;
  ListEmpInactivos.innerHTML = `<h1>Empleados Inactivos</h1>`;
}

function ApiConnection(){
  const respuesta = document.createElement('div');
  fetch('https://svct.cartasur.com.ar:8081/api/dummy', { method: 'GET' })
    .then(respuesta => respuesta.text())
    .then( APItexto => {
      console.log(APItexto); 
      if(APItexto == "Status: UP"){
        respuesta.innerHTML = `<div>Respuesta de API:✅</div>`;
      }
      return respuesta;
    })
    .catch(Apierror => console.error(Apierror));
    return respuesta;
}

