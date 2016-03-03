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
