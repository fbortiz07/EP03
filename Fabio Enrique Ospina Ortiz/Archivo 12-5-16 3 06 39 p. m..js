var express = 	require("express"),
	app		= 	express()
	puerto 	= 	process.env.PORT || 8081,
	bodyParser 	= require('body-parser');

//Para indicar que se envía y recibe información por medio de Json...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var listadoEncuesta = [
					{
						id 		: 	1,
						titulo  : "Pregunta que se plantea",
						titulo	: "nombre de la encuesta", 
						visible	: false,
						opciones: [
									{
										texto : "opcion1",
										cantidad: 0
									},
									{
										texto : "opcion2",
										cantidad: 0
									}
						] 

					}];

//Servicios REST...
app.get('/getEncuesta', function(req, res)
{
	res.json(listadoEncuesta);
});

app.get('/cambiaEstado/:id', function(req, res)
{
	var ind = buscarID(req.param("id"));
	var devuelve = {datos : ind >= 0 ? listadoEncuesta[ind] : "", status : ind >= 0 ? true : false};
	listadoEncuesta[ind].visible = true;
	res.json(devuelve);
});



//Busca la posición del usuario en el array...
var buscarID = function(id)
{
	var ind = -1;
	for(var i = 0; i < listadoEncuesta.length; i++)
	{
		if(Number(listadoEncuesta[i].id) === Number(id))
		{
			ind = i;
			break;
		}
	}
	return ind;
};

app.listen(puerto);
console.log("Express server iniciado en el " + puerto);