//Declaro variables//
let menuPrincipal;
let numeroKm = 0;
let precioViaje;
let escMenu = false;
let re = new RegExp("^[A-Z]+$", "i");
let menuReservas;

//Funcion promo//
function promo() {
  let numeroKm = parseInt(
    prompt("Por favor ingrese la cantidad de kms que desea viajar")
  );
  if (numeroKm >= 100) {
    alert(
      "El precio del km es de $100 superando los 100 o mas km, el valor de su viaje es de $" +
        numeroKm * 100
    );
  } else if (numeroKm < 100) {
    alert(
      "El precio del km es de $150, el valor de su viaje es de $" +
        numeroKm * 150
    );
  }
}

//Funcion reserva//
function reserva() {
  let nombre = prompt("Por favor indique a nombre de quien estara la reserva");
  if (re.test(nombre)) {
    alert(`Hola ${nombre}, tu reserva ha sido confirmada`);
  } else if (nombre == "" || isNaN) {
    alert("El campo ingresado no es correcto, por favor ingrese su nombre");
  }
}
do {
  menuPrincipal = parseInt(
    prompt(
      `Bienvenido, por favor elija una opcion:
      1_Consultar precio del km 
      2_Consultar precio de la hr de espera 
      3_Ver promociones
      4_Reserva tu viaje
      5_Salir del menu`
    )
  );

  //Opciones del menu//
  switch (menuPrincipal) {
    case 1:
      alert("El precio del km es de $150.");
      break;

    case 2:
      alert("El valor de la hora de espera es de $2.000");
      break;

    case 3:
      promo();
      break;
    case 4:
      menuReservas = parseInt(
        prompt(
          `
        1_Ingrese su nombre
        2_Ingrese fecha y horario en el que desea viajar
        3_Elija su comodidad`
        )
      );
      switch (menuReservas) {
        case 1:
          reserva();
          break;
        case 2:
          alert("*Sitio en construccion* Disculpe las molestias!");

          break;
        case 3:
          alert(
            "Contamos con 3 unidades que se adaptan a las necesidades de cada pasajero. Para mas informacion comunicarse al telefeno 4285-1320"
          );
      }
      break;
    case 5:
      alert("Gracias por elegirnos!!!");
      escMenu = true;
      break;

    //Opcion predeterminada//
    default:
      alert("Por favor escoja una opcion del 1 al 5");
      break;
  }
} while (!escMenu);

//Por consola//

//Objetos//
class Vehiculos {
  constructor(modelo, marca, color, capacidad) {
    this.modelo = modelo;
    this.marca = marca;
    this.color = color;
    this.capacidad = capacidad;
    this.confort = function () {
      console.log(
        "Todas las unidades cuentan con calefaccion y aire acondicionado."
      );
    };
  }
}
const vehiculo1 = new Vehiculos(
  "i20 coupe",
  "Hyundai",
  "Gris egipcio",
  "3 pasajeros"
);
const vehiculo2 = new Vehiculos("408", "Peugeot", "Negro", "4 pasajeros");
const vehiculo3 = new Vehiculos("Talagon", "Volkswagen", "Vino", "6 pasajeros");

console.log(vehiculo1, vehiculo2, vehiculo3);
vehiculo1.confort();
vehiculo2.confort();
vehiculo3.confort();

//Arrays//
const conductores = ["Santiago", "Catalina", "Esteban"];
console.log(conductores.includes("Catalina"));
console.log(conductores.includes("Daniel"));
console.log(conductores.includes("Esteban"));
console.log(conductores.includes("Santiago"));
console.log(conductores.includes("Joaquin"));
if (conductores.includes("Daniel", "Joaquin")) {
  console.log(conductores.indexOf("Daniel", "Joaquin"));
} else {
  console.log("Estos conductores no pertenecen a nuestra empresa");
}

//Funciones de orden superior//
const Santiago = conductores.filter(
  (conductores) => conductores === "Santiago"
);
console.log(Santiago);
