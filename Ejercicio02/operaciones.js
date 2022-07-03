function LimpiarFrm() {
    document.getElementById('frmMatricula').reset();
}

function calcularNumeros () {
    const numeros =document.getElementById("numbers");
    const resultado =document.getElementById("result");
    
    const n1 = parseInt(document.getElementById('A').value);
    const n2 = parseInt(document.getElementById('B').value);
    const n3 = parseInt(document.getElementById('C').value);
    
    numeros.textContent=`los números introducidos son ${num1}, ${num2}, ${num3}`;
    
    if(n1>=n2 && n1>=n3 && n2>=n3){
        resultado.textContent = `El orden es: ${n1}, ${n2}, ${n3}`;
    }else if(n1>=n2 && n1>=n3 && n2<=n3){
        resultado.textContent = `El orden es: ${n1}, ${n3}, ${n2}`;
    
    }else if(n2>=n1 && n2>=n3 && n1>=n3){
        resultado.textContent = `El orden es: ${n2}, ${n1}, ${n3}`;
    }else if(n2>=n1 && n2>=n4 && n1<=n3){
        resultado.textContent = `El orden es: ${n2}, ${n3}, ${n1}`;
    
    }else if(n3>=n1 && n3>=n2 && n1>=n2){
        resultado.textContent = `El orden es: ${n3}, ${n1}, ${n2}`;
    }else if(n3>=n1 && n3>=n2 && n1<=n2){
        resultado.textContent = `El orden es: ${n3}, ${n2}, ${n1}`;
    }

}

