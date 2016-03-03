
op = prompt('seleccione lo que desea hacer: a.Convertir galones b.Convertir temperatura c.Convertir peso d.Calculadora de fracciones', '');

switch (op) {
  case "a":
      galones();
    break
  case "b":
      grados();
    break
  case "c":
      peso();
    break
  case "d":
      calculadora();
    break
  default:
  alert('por favor seleccione una opcion valida');

}


function galones() //para realizar conversion de galones a litros
{
  galones = prompt('Por favor ingrese la cantidad de galones a convertir:', '');
  respuesta = galones * 3.78541;
  alert(respuesta+' litros');
};


function grados()//para realizar conversiones de temperatura
{
  grados = prompt('Por favor seleccione la unidad a trabajar (digite la letra): a.Centigrados b.Kelvin c.Fahrenheit', '');

  switch (grados) {
    case "a":
        entrada = prompt('Digite la cantidad a convertir:', '');
        fahrentheit = (9*entrada/5)+32;
        kelvin = parseInt(entrada) + 273.15;
        alert(entrada + 'grados centigrados = '+fahrentheit+' grados Fahrenheit');
        alert(entrada + 'grados centigrados = '+kelvin+' grados kelvin');
      break

    case "b":
        entrada = prompt('Digite la cantidad a convertir:', '');
        fahrentheit = (9*(parseInt(entrada)-273.15)/5)+32;
        centigrados = ((parseInt(entrada) - 273.15));
        alert(entrada + 'grados kelvin = '+fahrentheit+' grados Fahrenheit');
        alert(entrada + 'grados kelvin = '+centigrados+' grados centigrados');
      break

      case "c":
        entrada = prompt('Digite la cantidad a convertir:', '');
        centigrados = (5*((parseInt(entrada)-32))/9);
        kelvin = (5*((parseInt(entrada)-32)/9)+237.15);
        alert(entrada + 'grados Fahrenheit = '+centigrados+' grados centigrados');
        alert(entrada + 'grados Fahrenheit = '+kelvin+' grados kelvin');
       break

    default:
    alert("por favor ingrese un elemento valido.");

  }
};



function peso() //para calcular el peso suponiendo estar en la luna
{
  masa = prompt('Escriba su peso(masa) en Kilogramos por favor:','');
  peso = (9.8*0.17)*masa;
  alert ('su peso en la luna seria: ' +peso+ ' N');
};


function calculadora() //calculadora de fracciones
{
  primerfraccion = prompt('Escriba la primer fraccion:','');
  segundafraccion = prompt('Escriba la segunda fraccion','');
      fraccion1 = primerfraccion.split("/");
      fraccion2 = segundafraccion.split("/");

    numerador = ((fraccion1[0] * fraccion2[1]) + (fraccion1[1] * fraccion2[0]));
    denominador = fraccion1[1] * fraccion2[1];
    suma = numerador + '/' + denominador;
    alert('la suma de las fracciones es: ' +simplificaFraccionario(suma));

    numerador = ((fraccion1[0] * fraccion2[1]) - (fraccion1[1] * fraccion2[0]));
    denominador = fraccion1[1] * fraccion2[1];
    resta = numerador + '/' + denominador;
    alert('la resta de las fracciones es: ' +simplificaFraccionario(resta));

    numerador = fraccion1[0] * fraccion2[0] ;
    denominador = fraccion1[1] * fraccion2[1];
    multiplicacion = numerador + '/' + denominador;
    alert('la Multiplicacion de las fracciones es: ' +simplificaFraccionario(multiplicacion));

      numerador = fraccion1[0] * fraccion2[1] ;
      denominador = fraccion1[1] * fraccion2[0];
      division = numerador + '/' + denominador;
      alert('la division de las fracciones es: ' +simplificaFraccionario(division));

    function simplificaFraccionario (val)
    {
      var parteVal = val.split("/");
      var numerador = Number(parteVal[0]);
      var denominador = Number(parteVal[1]);
      var maximoComunDivisor = function(a, b)
      {
        return b ? maximoComunDivisor(b, a%b) : a;
      };
      maximoComunDivisor = maximoComunDivisor(numerador,denominador);
        numerador /= maximoComunDivisor;
        denominador /= maximoComunDivisor;
        var respuesta = numerador + "/" + denominador;
        if(denominador === 1)
        {
            respuesta = numerador;
        }
      return respuesta;
    };
};
