function abrirLogin() {

    location.href = "login.html"


}

function validarDatos() {

    // let usuario = new x();
    let inputValuesX = document.getElementsByClassName("text-usuario");
    console.log(inputValuesX)
        //let password = new y();
    let inputValuesY = document.getElementsByClassName("pwd-usuario");
    console.log(inputValuesY)

    nameValue = [{ user: 'Admin', password: 'Admin1234' }, { user: 'Customer', password: 'Customer1234' }].filter(element => element.user === inputValuesX[0].value && element.password === inputValuesY[0].value);
    console.log(inputValuesX.value)
    console.log(inputValuesY.value)

    if (nameValue.length > 0) {
        location.href = "panel-admin.html"
    } else {
        alert("Verifique sus datos.")
    }
    // nameValue = [{user: 'Admin', password: 'Admin1234'}, {user: 'Customer', password: 'Customer1234'}].map.call(inputValuesX, function(dataInputX)
    //{
    //         usuario.push(dataInputX.value);
    //     })
    // usuario.foreach(function(inputValuesDataX) {

    //     if (inputValuesDataX === "Admin", y === "Admin1234") {
    //         location.href = "panel-admin.html"


    //     } else {

    //         alert("Verifique sus datos.")
    //     }

    // Aquí va la condición de comparar la contraseña
    console.log(nameValue)


}