function cantidadMaterias(){
    var spanModelo = $('$span-modelo').html();
    var spanModelo_strinf = spanModelo.toString();
    var campos = $('$cantMaterias').val();
    var i = 1;
    var texto = '';

    while(i <= campos){
        texto = texto + spanModelo_strinf.replace(/-0/g, '-' + i.toString());
        i = i + 1;
    }
    $('#span-real').html(texto);
}

function LimpiarFrm() {
    document.getElementById('frmMatricula').reset();
}

function calcularMatricula () {
    const papeleria = 20000;
    const carné = 8000;
    const dcto = 0.2;
    var costosFijos = papeleria + carné;
    var valorMateria = parseInt(document.getElementById('valorMateria').value);

    var costoTotal = costosFijos + valorMateria;
    var dctoTotal = costoTotal * dcto;
    var valorResultante = dctoTotal - costoTotal;
    console.log(valorResultante.value);
    alert(valorResultante.value);

}

