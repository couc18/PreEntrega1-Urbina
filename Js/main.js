alert("Bienvenido!!!")

let edad = parseInt(prompt("Introduzca su edad"))

 while (edad < 18 ){
    alert("Para ingresar tiene que ser mayor a 18")

    edad = parseInt(prompt("Introduzca nuevamente la edad"))
 }
 console.log(edad)

 const genero = prompt("Introduzco su genero (Hombre/Mujer)")

//Formula para saber cuantas calorias consume el cuerpo en reposo
if (genero == "Mujer") {
    let peso = parseInt(prompt("Introduzca su peso(kg):")) 
    let altura = parseInt(prompt("Introduzca su altura(cm):")) 
    let formulaMujer = parseInt((655 + (9.6 * peso) + (1.8 * altura)) - (4.7 * edad)) 
    
    alert("Tu cuerpo consume en reposo "+ formulaMujer + " calorias diarias")

    const dias = prompt("Para conocer cuantas calorias quemas según tu actividad fisica, introduce cuantos dias a la semanas realizas ejercicios. (Nada, 1, 2, 3, 4 ,5 ,6 ,7 o Dos veces al dia")
    console.log (dias)

//Formulas para conocer cuantas calorias consume una mujer al dia dependiendo de la cantidad de ejercicio fisico que realices 
    switch (dias) {
        case "Nada":
        const pocoEjercicio = parseInt(1.2 * formulaMujer)
        alert( pocoEjercicio + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "1":
        case "2":
        case "3":
        const ejercicioLigero = parseInt(1.375 * formulaMujer)
        console.log(ejercicioLigero)
        alert(ejercicioLigero + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "4":
        case "5":
        const ejercicioModerado =parseInt(1.55 * formulaMujer)
        alert(ejercicioModerado + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;
    
        case "6":
        case "7":
        const deportista = parseInt (1.72 * formulaMujer)
        alert(deportista + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "Dos veces al dia":
        const atleta = parseInt (1.9 * formulaMujer)
        alert(atleta + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual.")
        break;
    }

    
} else if (genero == "Hombre") { 
    let peso2 = parseInt(prompt("Introduzca su peso (kg):"))
    let altura2 = parseInt(prompt("Introduzca su altura(cm):")) 
    let formulaHombre = parseInt((66 + (13.7 * peso2) + (5 * altura2)) - (6.75 * edad))
    alert("Tu cuerpo consume en reposo "+ formulaHombre+" calorias diarias" )

    const dias = prompt("Para conocer cuantas calorias quemas según tu actividad fisica, introduce cuantos dias a la semanas realizas ejercicios. (Nada, 1, 2, 3, 4 ,5 ,6 ,7 o Dos veces al dia")
    console.log (dias)

//Formulas para conocer cuantas calorias consume un hombre al dia dependiendo de la cantidad de ejercicio fisico que realices 

    switch (dias) {
        case "Nada":
        const pocoEjercicio = parseInt(1.2 * formulaHombre)
        alert( pocoEjercicio + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "1":
        case "2":
        case "3":
        const ejercicioLigero = parseInt(1.375 * formulaHombre)
        console.log(ejercicioLigero)
        alert(ejercicioLigero + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "4":
        case "5":
        const ejercicioModerado =parseInt(1.55 * formulaHombre)
        alert(ejercicioModerado + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;
    
        case "6":
        case "7":
        const deportista = parseInt (1.72 * formulaHombre)
        alert(deportista + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "Dos veces al dia":
        const atleta = parseInt (1.9 * formulaHombre)
        alert(atleta + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual.")
        break;
    }

}
