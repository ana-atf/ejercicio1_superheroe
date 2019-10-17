/*Ejercicio 1:

Crearemos una aplicación web que consistirá en:

+ Un botón para generar nombres de superhéroes *masculinos*
+ Un botón para generar nombres de superhéroes *femeninos*
+ Un espacio en blanco para visualizar el nombre generado

Cuando se haga click sobre uno de los botones, se generará aleatoriamente un nombre del género 
correspondiente y se imprimirá en el espacio en blanco. 

Además, dicho nombre generado se guardará en las cookies o en el localStorage del cliente.

Finalmente, cuando se cargue la página, se comprobarán las cookies o el localStorage para 
comprobar si ya hay algún nombre anteriormente generado. Si lo hay, se pintará en el espacio
en blanco correspondiente por defecto.

*IMPORTANTE* Crear un repo de git solamente para este proyecto, a parte de los otros repos de git que tenéis. */


let titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"];
let titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
let adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]
let sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]
    

function masculino() {
    let nombre1 = Math.round(Math.random()* (titulos_masculino.length -1));   
    let nombre2 = Math.round(Math.random()* (adjetivos.length -1));
    let nombre3 = Math.round(Math.random()* (sustantivos.length -1));
    document.querySelectorAll("input")[0].value = `${titulos_masculino[nombre1]} ${adjetivos[nombre2]} ${sustantivos[nombre3]}`;
    document.cookie = `username = ${document.querySelectorAll("input")[0].value}`;
    return true
}

function femenino() {
    let nombre1 = Math.round(Math.random()* (titulos_femenino.length -1));
    let nombre2 = Math.round(Math.random()* (adjetivos.length -1));
    let nombre3 = Math.round(Math.random()* (sustantivos.length -1));
    document.querySelectorAll("input")[0].value = `${titulos_femenino[nombre1]} ${adjetivos[nombre2]} ${sustantivos[nombre3]}`;
    document.cookie = `username = ${document.querySelectorAll("input")[0].value}`;
    return true
}


let botonM = document.querySelectorAll("button")[0]
botonM.addEventListener("click", masculino)    


let botonF = document.querySelectorAll("button")[1]
botonF.addEventListener("click", femenino)




