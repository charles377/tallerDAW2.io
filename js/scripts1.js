var cartelera = {
    "Peliculas":[
        {
            "Imagen" : "../img/shang-chi.jpg",
            "Nombre" : "Shang-Chi y la leyenda de diez anillos",
            "Clasificacion" : "B",
            "Formato" : "DOB, DIG SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "132min",
            "Horarios" : ["15:15", "14:00"]  
        },
        {
            "Imagen" : "../img/sin tiempo.jpg",
            "Nombre" : "Sin tiempo para morir",
            "Clasificacion" : "B",
            "Formato" : "DOB, DIG SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "163min",
            "Horarios" : ["17:00", "20:30", "14:45", "19:20"]  
        },
        {
            "Imagen" : "../img/venom.jpg",
            "Nombre" : "Venom: Carnage liberado",
            "Clasificacion" : "B",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales, VIP",
            "Duracion" : "98min",
            "Horarios" : ["15:25","15:50","17:50","18:15","18:20","20:15","13:55","14:55","16:50","14:25"]  
        },
        {
            "Imagen" : "../img/Godzilla.jpg",
            "Nombre" : "Godzilla vs Kong",
            "Clasificacion" : "B",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales, VIP",
            "Duracion" : "113min",
            "Horarios" : ["12:25","13:35","14:45","15:35"]

        },
        {
            "Imagen" : "../img/Tom y Jerry.jpg",
            "Nombre" : "Tom y Jerry",
            "Clasificacion" : "PG",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "105min",
            "Horarios" : ["20:55","23:35","01:45","02:35"]

        },
        {
            "Imagen" : "../img/Raya.jpg",
            "Nombre" : "Raya:El Ultimo Dragon",
            "Clasificacion" : "PG",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "117min",
            "Horarios" : ["19:55","22:35","23:45","01:35"]
        },
        {
            "Imagen" : "../img/Los Croods.jpg",
            "Nombre" : "Los Croods 2: Una Nueva Era",
            "Clasificacion" : "PG",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "95min",
            "Horarios" : ["23:55","00:40","14:55","17:10"]
        },
        {
            "Imagen" : "../img/El Fanatico.jpg",
            "Nombre" : "El Fanatico",
            "Clasificacion" : "B",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "95min",
            "Horarios" : ["23:55","00:40","14:55","17:10"]
        },
        {
            "Imagen" : "../img/Z.jpg",
            "Nombre" : "Z",
            "Clasificacion" : "A",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "VIP",
            "Duracion" : "83min",
            "Horarios" : ["21:55","23:35","13:45","14:35"]
        },
        {
            "Imagen" : "../img/SONIC.jpg",
            "Nombre" : "SONIC LA PELICULA",
            "Clasificacion" : "PG",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "100min",
            "Horarios" : ["21:55","23:45","14:45","15:40"]
        },
        {
            "Imagen" : "../img/El Conjuro 2.jpg",
            "Nombre" : "El Conjuro 2",
            "Clasificacion" : "PG-13",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales, VIP",
            "Duracion" : "134min​",
            "Horarios" : ["15:25","17:30","19:00","21:14",]
        },
        {
            "Imagen" : "../img/Dune.jpg",
            "Nombre" : "Dune",
            "Clasificacion" : "PG-13",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "155min​",
            "Horarios" : ["22:00","14:15","18:40","22:00",]
        },
        {
            "Imagen" : "../img/Maligno.jpg",
            "Nombre" : "Maligno",
            "Clasificacion" : "B",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "111min​",
            "Horarios" : ["17:00","18:51","19:00","20:51",]
        },
        {
            
            "Imagen" : "../img/Annabelle.jpg",
            "Nombre" : "Annabelle 3",
            "Clasificacion" : "B",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "106min",
            "Horarios" : ["21:55","23:45","14:45","15:40",]
        }, 
        {
            "Imagen" : "../img/Lucas.jpg",
            "Nombre" : "Lucas",
            "Clasificacion" : "PG",
            "Formato" : "DOB, DIG SUB, 3D DOB, 3D SUB",
            "Butacas" : "Tradicionales",
            "Duracion" : "95m",
            "Horarios" : ["21:55","22:45","13:45","14:50",]
        }       
    ]
};

var div = document.getElementById("cartelera");
div.innerHTML = imprimirDatos(cartelera.Peliculas);

function imprimirDatos(datos){

    var total = datos.length;
    data= "";
    for(var i=0; i<total; i++){
    data+= '<div class="row pel">';
    data += '<div class="col-3">';
        data += '<img class="img-fluid" src=" ' + datos[i].Imagen + ' " alt="Portada pelicula">';
    data += '</div>'

    data += '<div class="col-9">';
        data += '<div class="row">';
            data += '<h4 class="card-title">'+ datos[i].Nombre +'</h4>';
            data += '<p class="card-text"><b>Clasificacion: </b>'+ datos[i].Clasificacion +' &nbsp&nbsp<b>Duracion de la pelicula en minutos: </b>'+ datos[i].Duracion +'</p>';
        data += '</div>';
        data +='<div class="row card">'
            data += '<p><b>Formato de pelicula: </b>' + datos[i].Formato + ' &nbsp | &nbsp <b>Butacas:</b> '+datos[i].Butacas+'</p>';
        data += '</div>'
        data +='<div class="row card hora">';
            data +='<p><b>Horarios:</b><br>';
            var horas = datos[i].Horarios.length;
            for(var j=0; j<horas; j++){
                data +='<spam>' + datos[i].Horarios[j] + '</spam>';
            }
        data +='</p></div>'
    data +='</div>';
    data += '</div>';
    }
    
    return data;
}