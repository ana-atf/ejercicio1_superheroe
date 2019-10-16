function superHeroe() {
    let genero = prompt("Indique si es hombre (h) o mujer(m)")
    let titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"];
    const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
    let adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]
    let sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]
    
    
    let nombre1 = Math.round(Math.random()* titulos_masculino.length -1);   
    let nombre2 = Math.round(Math.random()* titulos_femenino.length -1);
    let nombre3 = Math.round(Math.random()* adjetivos.length -1);
    let nombre4 = Math.round(Math.random()* sustantivos.length -1);

     

    if (genero === "h"){
        document.write("Mi nombre es" + titulos_masculino[nombre1] + " " + adjetivos[nombre3] + " " + sustantivos[nombre4]) 
    }else if (genero === "m"){
        document.write("Mi nombre es" + titulos_femenino[nombre2] + " " + adjetivos[nombre3] + " " + sustantivos[nombre4])

    }return true
    
}

let boton12 = document.querySelectorAll("body > button")[12]
boton12.addEventListener("click", superHeroe)